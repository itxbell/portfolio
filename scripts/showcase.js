document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("section-projects");
  if (!root) return;

  const base = "images/showcase/";
  const items = [
    { type: "image", src: `${base}village.jpg`, thumb: `${base}village.jpg`, title: "The village from above", caption: "Walls, windmills and red tile roofs on the river bend" },
    { type: "video", src: `${base}video.mp4`, thumb: `${base}video-poster.jpg`, poster: `${base}video-poster.jpg`, title: "Portal in motion", caption: "Short clip, 8 seconds" },
    { type: "image", src: `${base}windmill.jpg`, thumb: `${base}windmill.jpg`, title: "Windmill and river wall", caption: "Looking down the watchtower line" },
    { type: "image", src: `${base}church.jpg`, thumb: `${base}church.jpg`, title: "Chapel in the cypress grove", caption: "Graveyard path, pointed spire" },
    { type: "image", src: `${base}portal.jpg`, thumb: `${base}portal.jpg`, title: "The standing stones", caption: "Where the portal opens in the cliff" },
    { type: "image", src: `${base}ritual.jpg`, thumb: `${base}ritual.jpg`, title: "The gathering", caption: "Figures circle the central stone" },
    { type: "image", src: `${base}gate.jpg`, thumb: `${base}gate.jpg`, title: "Inside the red", caption: "Close view of the portal at dusk" },
    { type: "image", src: "images/7.png", thumb: "images/7.png", title: "The Crimson’s Maw", caption: "The portal beneath the Red Eclipse" },
    { type: "image", src: "images/4.jpeg", thumb: "images/4.jpeg", title: "The Kingdom of Rites", caption: "Aerial view of the kingdom" },
    { type: "image", src: "images/3.jpeg", thumb: "images/3.jpeg", title: "The project’s setting", caption: "The chapel and cemetery" },
    { type: "image", src: "images/2].jpeg", thumb: "images/2].jpeg", title: "Windmill and river wall", caption: "Research and greyboxing shaped the kingdom’s layout" },
  ];

  const story = [
    { chapter: "About the project", title: "The Kingdom of Rites", image: items[8].src, paragraphs: [
      "I completed this project together with an animation student. I took on the role of Level designer and Layout/Blockout Artist, and also contributed on some VFX work.",
      "The Kingdom of Rites is a kingdom set in Medieval Era and is made up of several distinct locations—a fortress, cemetery, a town and a ritual site. First, the kingdom of Rites appears to be ordinary and peaceful. That changes the moment a cult performs a failed ritual, and the kingdom is engulfed by crimson's eclipse—opening a gateway to a demonic realm that frees demonic entities and corrupts the kingdom, leaving its people to suffer unimaginable death.",
    ] },
    { chapter: "The brief", title: "How did we end up with this project?", image: items[9].src, paragraphs: [
      "We chose Fantasy because we think this kind of genre will give us enough freedom to invent a world from scratch. With no real-world rules to follow, we could shape the story through the setting, lighting, and mood, and that became the main direction of the project.",
    ] },
    { chapter: "Building the World", title: "Building the World", image: items[10].src, paragraphs: [
      "Before this project came to life, the early stages revolved around layout and greyboxing. As the person who is assigned to these roles, I focused first on research, using it as a reference to sculpt and shape our main project.",
      "I found out that the world during the medieval era mainly consists of two geographical features: navigable waterway systems and cliffsides. This information helped me shape the landscape and give it more stories.",
      "After sculpting the landscape and laying out the first foundation of the project, I moved on to painting it, using an asset pack from Fab (standard license). It made sculpting and painting the main landscape much easier.",
    ] },
    { chapter: "Building the World", title: "Every asset has a place", image: items[3].src, paragraphs: [
      "Once the landscape work was done, I spent most of my time placing assets. I made sure I was never putting a random asset in a random place. Since I was designing a level based on a medieval environment, I followed a specific and accurate layout.",
      "The connected walls and buildings show how the Kingdom of Rites could easily maintain security and peace across the whole kingdom, and the town will provide trade and economy. From having priests and nobles to building churches and churchyard, religion also revolves around the kingdom.",
      "Every time I placed a specific asset in the project, I made sure to test the game. This let me easily check whether the character’s size matched the asset.",
    ] },
    { chapter: "About the project", title: "PORTAL: THE CRIMSON'S MAW", image: items[7].src, paragraphs: [
      "Besides the Red crimson sky and volcanic ashes, the portal also serves as one of the most crucial VFX we needed to consider making the corruption of the Red eclipse look more believable. The portal will serve as the kingdom's connection to the demonic realm, freeing demonic entities that support the corruption of the whole kingdom.",
    ] },
    { chapter: "PORTAL · VFX", title: "Making the VFX (material-based)", video: true, paragraphs: [
      "Although this was my first time making a VFX from a material in Unreal Engine, I was able to get the hang of it quickly. Unlike Niagara systems, which take a lot of time and setup to get a specific effect or emitter working, making a VFX from a material in Unreal is more efficient.",
      "Since the Kingdom of Rite was engulfed by the Red Eclipse, I decided to give the portal two contrasting colors so it would be easy to recognize. Choosing crimson red as one of the main colors also communicates to the player that the portal is extremely dangerous, because the color connects it to the Red Eclipse.",
    ] },
    { chapter: "Project reflection", title: "What I learned", textOnly: true, paragraphs: [
      "Working on The Kingdom of Rites was a valuable learning experience that allowed me to develop my skills in level design, environment layout, and visual effects. As this project was completed in collaboration with an animation student, I also learned the importance of working together and ensuring that the environment supported both the visual presentation and the overall narrative of the game.",
      "One of the biggest lessons I learned was the importance of planning before building the environment. Through research, greyboxing, and landscape sculpting, I was able to create a world that felt more believable and purposeful. Instead of placing assets purely for visual appeal, I considered how the layout of buildings, walls, waterways, and cliffsides could reflect the kingdom's history, economy, religion, and security. Testing the level throughout development also helped me identify scale issues and make adjustments to ensure that the environment was suitable for gameplay.",
      "Another important learning experience was creating The Crimson's Maw, the portal VFX. Since this was my first time creating a material-based visual effect in Unreal Engine, I initially had to familiarise myself with the process. However, through experimentation, I learned how materials could be used to create striking visual effects without relying entirely on more complex particle systems. I also became more aware of how colour can communicate meaning. By combining contrasting colours with crimson red, I wanted the portal to stand out from the environment while reinforcing the danger and corruption associated with the Red Eclipse.",
      "Looking back, I believe one of the strengths of this project was the way the environment and visual effects worked together to support the narrative. The peaceful kingdom and its transformation into a corrupted world gave me an opportunity to explore how level design, atmosphere, and visual storytelling could influence the player's perception of a space. However, the project also taught me that creating a believable environment requires continuous iteration. In future projects, I would like to dedicate more time to playtesting, refining environmental details, and improving the integration of visual effects with the surrounding world. I would also explore more advanced VFX techniques to create greater depth and movement in the portal.",
      "Overall, The Kingdom of Rites strengthened my understanding of environmental storytelling and reinforced my interest in level design and VFX. More importantly, it taught me that a successful environment is not just about how it looks, but how every design decision contributes to the world, atmosphere, and experience I want the player to have.",
    ] },
  ];

  const $ = (selector) => root.querySelector(selector);
  const mosaic = $(".showcase-mosaic");
  const storyPage = $(".showcase-story-page");
  const dots = $(".showcase-dots");
  const progress = $(".showcase-progress i");
  const lightbox = $(".showcase-lightbox");
  const lightboxInner = $(".showcase-lightbox-inner");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let mode = "story";
  let pageIndex = 0;
  let lightboxIndex = 0;
  let autoplay = !reducedMotion.matches;
  let pausedOnText = false;
  let timer;
  let touchStart = null;

  function mediaFor(item, altText = `${item.title}. ${item.caption}`, shouldAutoplay = false) {
    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.poster = item.poster;
      video.controls = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = shouldAutoplay;
      video.setAttribute("aria-label", `Video: ${item.title}`);
      return video;
    }
    const image = document.createElement("img");
    image.src = item.src || item.image;
    image.alt = altText;
    return image;
  }

  function button(className, label, text, action) {
    const element = document.createElement("button");
    element.type = "button";
    element.className = className;
    element.setAttribute("aria-label", label);
    element.textContent = text;
    element.addEventListener("click", action);
    return element;
  }

  function armAutoplay() {
    window.clearTimeout(timer);
    progress.style.transition = "none";
    progress.style.width = "0";
    if (!autoplay || pausedOnText || mode === "mosaic" || lightbox.open) return;
    const duration = 10000;
    void progress.offsetWidth;
    progress.style.transition = `width ${duration}ms linear`;
    progress.style.width = "100%";
    timer = window.setTimeout(() => renderStory(pageIndex + 1), duration);
  }

  function setAutoplay(value) {
    autoplay = value;
    const control = $(".showcase-autoplay");
    control.textContent = autoplay ? "⏸" : "▶";
    control.setAttribute("aria-label", autoplay ? "Pause autoplay" : "Play autoplay");
    armAutoplay();
  }

  function renderStory(index) {
    pageIndex = (index + story.length) % story.length;
    const page = story[pageIndex];
    storyPage.classList.toggle("is-dense", page.paragraphs.length > 4);
    storyPage.classList.toggle("is-text-only", Boolean(page.textOnly));
    let media = null;
    if (!page.textOnly) {
      media = document.createElement("div");
      media.className = "showcase-story-media";
      media.append(page.video ? mediaFor(items[1], undefined, true) : mediaFor({ image: page.image, title: page.title, caption: "Project image" }));
    }

    const copy = document.createElement("div");
    copy.className = "showcase-story-copy";
    const chapter = document.createElement("small");
    chapter.textContent = page.chapter;
    const heading = document.createElement("h2");
    heading.textContent = page.title;
    copy.append(chapter, heading);
    page.paragraphs.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      copy.append(paragraph);
    });
    storyPage.replaceChildren(...(media ? [media, copy] : [copy]));
    [...dots.children].forEach((dot, index) => dot.setAttribute("aria-current", String(index === pageIndex)));
    armAutoplay();
  }

  function openLightbox(index) {
    lightboxIndex = (index + items.length) % items.length;
    const item = items[lightboxIndex];
    lightboxInner.replaceChildren(
      mediaFor(item, `${item.title}. ${item.caption}`, true),
      button("showcase-close", "Close gallery", "×", () => lightbox.close()),
      button("showcase-nav prev", "Previous item", "‹", () => openLightbox(lightboxIndex - 1)),
      button("showcase-nav next", "Next item", "›", () => openLightbox(lightboxIndex + 1)),
    );
    const caption = document.createElement("p");
    caption.className = "showcase-lightbox-caption";
    caption.textContent = `${item.title} — ${item.caption}`;
    lightboxInner.append(caption);
    if (!lightbox.open) lightbox.showModal();
    armAutoplay();
  }

  function buildItems() {
    items.forEach((item, index) => {
      const tile = button("showcase-tile", `Open ${item.title}${item.type === "video" ? " video" : ""}`, "", () => openLightbox(index));
      const tileImage = document.createElement("img");
      tileImage.src = item.thumb;
      tileImage.alt = "";
      const label = document.createElement("span");
      label.textContent = item.title;
      tile.append(tileImage, label);
      if (item.type === "video") {
        const badge = document.createElement("i");
        badge.className = "showcase-badge";
        badge.textContent = "Video";
        tile.append(badge);
      }
      mosaic.append(tile);
    });

    story.forEach((page, index) => {
      const dot = button("", `Go to story page ${index + 1}`, "", () => renderStory(index));
      dots.append(dot);
    });
  }

  function setMode(nextMode) {
    mode = nextMode;
    $(".showcase-story").hidden = mode !== "story";
    mosaic.hidden = mode !== "mosaic";
    root.querySelectorAll("[data-mode]").forEach((control) => control.setAttribute("aria-pressed", String(control.dataset.mode === mode)));
    root.querySelectorAll("video").forEach((video) => video.pause());
    if (mode === "story") renderStory(pageIndex);
    else armAutoplay();
  }

  buildItems();
  root.querySelectorAll("[data-mode]").forEach((control) => control.addEventListener("click", () => setMode(control.dataset.mode)));
  $(".showcase-autoplay").addEventListener("click", () => setAutoplay(!autoplay));
  root.querySelectorAll("[data-story-step]").forEach((control) => control.addEventListener("click", () => renderStory(pageIndex + Number(control.dataset.storyStep))));
  $(".showcase-story").addEventListener("pointerover", (event) => {
    const hoveringText = Boolean(event.target.closest(".showcase-story-copy"));
    if (hoveringText !== pausedOnText) { pausedOnText = hoveringText; armAutoplay(); }
  });
  $(".showcase-story").addEventListener("pointerleave", () => {
    if (pausedOnText) { pausedOnText = false; armAutoplay(); }
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxInner) lightbox.close();
  });
  lightbox.addEventListener("close", () => { lightboxInner.replaceChildren(); armAutoplay(); });
  root.addEventListener("keydown", (event) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    if (event.target instanceof Element && event.target.closest("video")) return;
    if (lightbox.open) openLightbox(lightboxIndex + delta);
    else if (mode === "story") renderStory(pageIndex + delta);
    else return;
    event.preventDefault();
  });
  root.addEventListener("touchstart", (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", (event) => {
    if (touchStart === null || lightbox.open) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    touchStart = null;
    if (Math.abs(distance) < 50) return;
    if (mode === "story") renderStory(pageIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });
  reducedMotion.addEventListener("change", (event) => { if (event.matches) setAutoplay(false); });
  setAutoplay(autoplay);
  renderStory(0);
});
