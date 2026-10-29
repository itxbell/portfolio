document.addEventListener("DOMContentLoaded", () => {
  const repositoryBody = document.getElementById("github-repositories");
  const status = document.getElementById("github-status");
  if (!repositoryBody || !status) return;

  const username = "itxbell";
  const apiHeaders = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  async function getPublicData(path) {
    const response = await fetch(`https://api.github.com${path}`, { headers: apiHeaders });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    return response.json();
  }

  function setCount(id, value) {
    const element = document.getElementById(id);
    if (element && Number.isFinite(value)) element.textContent = value.toLocaleString();
  }

  function renderProfile(profile) {
    setCount("github-repositories-count", profile.public_repos);
    setCount("github-followers", profile.followers);
    setCount("github-following", profile.following);

    const displayName = document.getElementById("github-name");
    if (displayName) displayName.textContent = profile.name || `@${profile.login || username}`;

    const avatar = document.getElementById("github-avatar");
    if (avatar && typeof profile.avatar_url === "string") {
      try {
        const avatarUrl = new URL(profile.avatar_url);
        if (avatarUrl.protocol === "https:" && ["avatars.githubusercontent.com", "github.com"].includes(avatarUrl.hostname)) {
          avatar.src = avatarUrl.href;
        }
      } catch {
        avatar.hidden = true;
      }
    }
  }

  function makeCell(text, className = "") {
    const cell = document.createElement("td");
    if (className) cell.className = className;
    cell.textContent = text;
    return cell;
  }

  function renderRepositories(repositories) {
    repositoryBody.replaceChildren();
    if (!Array.isArray(repositories) || repositories.length === 0) {
      const row = document.createElement("tr");
      const cell = makeCell("No public repositories to show.", "github-table-message");
      cell.colSpan = 4;
      row.append(cell);
      repositoryBody.append(row);
      return;
    }

    const dateFormat = new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short" });
    repositories.slice(0, 6).forEach((repository) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const nameLink = document.createElement("a");
      nameLink.className = "github-repo-link";
      nameLink.textContent = repository.name || "Untitled repository";
      nameLink.target = "_blank";
      nameLink.rel = "noopener noreferrer";

      let repositoryUrl = `https://github.com/${username}/${encodeURIComponent(repository.name || "")}`;
      try {
        const candidate = new URL(repository.html_url);
        if (candidate.protocol === "https:" && candidate.hostname === "github.com") repositoryUrl = candidate.href;
      } catch {
        // Keep the canonical profile-based fallback URL.
      }
      nameLink.href = repositoryUrl;
      nameCell.append(nameLink);

      if (repository.description) {
        const description = document.createElement("span");
        description.className = "github-repo-description";
        description.textContent = repository.description;
        nameCell.append(description);
      }

      const languageCell = makeCell(repository.language || "—", "github-language");
      if (repository.language) {
        const marker = document.createElement("i");
        marker.setAttribute("aria-hidden", "true");
        languageCell.prepend(marker);
      }

      let updated = "—";
      if (repository.updated_at) {
        const updatedDate = new Date(repository.updated_at);
        if (!Number.isNaN(updatedDate.valueOf())) updated = dateFormat.format(updatedDate);
      }

      row.append(
        nameCell,
        languageCell,
        makeCell(Number(repository.stargazers_count || 0).toLocaleString()),
        makeCell(updated),
      );
      repositoryBody.append(row);
    });
  }

  async function loadGitHubProfile() {
    const results = await Promise.allSettled([
      getPublicData(`/users/${username}`),
      getPublicData(`/users/${username}/repos?type=owner&sort=updated&direction=desc&per_page=6`),
    ]);
    const errors = [];

    if (results[0].status === "fulfilled") renderProfile(results[0].value);
    else errors.push("profile");

    if (results[1].status === "fulfilled") renderRepositories(results[1].value);
    else {
      errors.push("repositories");
      const row = document.createElement("tr");
      const cell = makeCell("Repositories could not be loaded. Visit the GitHub profile to browse them.", "github-table-message");
      cell.colSpan = 4;
      row.append(cell);
      repositoryBody.replaceChildren(row);
    }

    status.textContent = errors.length
      ? "Some profile details are unavailable right now. The GitHub profile link is still available."
      : "Live public profile data from GitHub.";
  }

  loadGitHubProfile().catch(() => {
    status.textContent = "GitHub profile details are unavailable right now. Visit the profile directly to browse.";
  });
});
