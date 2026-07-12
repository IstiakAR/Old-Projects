const PREVIEW = {
  width: 800,
  crop: 500,
  maxAge: 24,
  objectPosition: "top center",
};

const PREVIEW_EXTS = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

const projects = [
  {
    name: "Calculator",
    tag: "Vanilla JS",
    description: "A clean browser calculator with basic operations.",
    path: "/Calculator/",
    demo: "https://istiakar.github.io/Calculator/",
    slug: "calculator",
    preview: {
      crop: 700,
      objectPosition: "center center",
    },
  },
  {
    name: "CV Application",
    tag: "React",
    description: "Build and preview a résumé in the browser.",
    path: "/CV-Application/",
    demo: "https://cv-application-istiakar.netlify.app/",
    slug: "cv-application",
  },
  {
    name: "Etch-a-Sketch",
    tag: "Vanilla JS",
    description: "Draw on a grid by hovering — classic sketch pad.",
    path: "/Etch-a-sketch/",
    demo: "https://istiakar.github.io/Etch-a-sketch/",
    slug: "etch-a-sketch",
    preview: {
      crop: 650,
      objectPosition: "left center",
    },
  },
  {
    name: "Library",
    tag: "Vanilla JS",
    description: "Track books you’ve read or plan to read.",
    path: "/Library/",
    demo: "https://istiakar.github.io/Library/",
    slug: "library",
  },
  {
    name: "Memory Card",
    tag: "React",
    description: "Test your memory — don’t click the same card twice.",
    path: "/Memory-Card/",
    demo: "https://memory-card-istiakar.netlify.app",
    slug: "memory-card",
    preview: {
      width: 900,
      crop: 800,
      objectPosition: "center 35%",
    },
  },
  {
    name: "Restaurant",
    tag: "Webpack",
    description: "Multi-page restaurant site with home, menu, and about.",
    path: "/Restaurant/",
    demo: "https://istiakar.github.io/Restaurant/",
    slug: "restaurant",
    preview: {
      width: 1000,
      crop: 700,
      maxAge: 1,
      objectPosition: "top center",
    },
  },
  {
    name: "Rock Paper Scissor",
    tag: "Vanilla JS",
    description: "Play rock-paper-scissors against the browser.",
    path: "/Rock-Paper-Scissor/",
    demo: "https://istiakar.github.io/Rock-Paper-Scissor/",
    slug: "rock-paper-scissor",
  },
  {
    name: "Tic-Tac-Toe",
    tag: "Vanilla JS",
    description: "Two-player tic-tac-toe with a simple UI.",
    path: "/Tic-Tac-Toe/",
    demo: "https://istiakar.github.io/Tic-Tac-Toe/",
    slug: "tic-tac-toe",
  },
  {
    name: "ToDo",
    tag: "Webpack",
    description: "Organize tasks and projects in a todo app.",
    path: "/ToDo/",
    demo: "https://istiakar.github.io/ToDo/",
    slug: "todo",
    preview: {
      width: 900,
      crop: 850,
      objectPosition: "center 30%",
    },
  },
  {
    name: "Weather",
    tag: "Vanilla JS",
    description: "Look up current weather for any city.",
    path: "/Weather/",
    demo: "https://istiakar.github.io/Weather/",
    slug: "weather",
  },
];

function getPreviewOptions(project) {
  return { ...PREVIEW, ...(project.preview || {}) };
}

function remotePreviewUrl(project) {
  const opts = getPreviewOptions(project);
  return `https://image.thum.io/get/width/${opts.width}/crop/${opts.crop}/maxAge/${opts.maxAge}/noanimate/${project.demo}`;
}

function localPreviewCandidates(project) {
  const slug = project.slug || project.name.toLowerCase().replace(/\s+/g, "-");
  return PREVIEW_EXTS.map((ext) => `previews/${slug}${ext}`);
}

function setPreviewImage(img, project) {
  const opts = getPreviewOptions(project);
  img.style.objectPosition = opts.objectPosition;

  const localPaths = localPreviewCandidates(project);
  const remote = remotePreviewUrl(project);
  let index = 0;

  function tryNext() {
    if (index < localPaths.length) {
      img.src = localPaths[index++];
      return;
    }
    if (img.dataset.remoteTried !== "1") {
      img.dataset.remoteTried = "1";
      img.src = remote;
      return;
    }
    img.classList.add("error");
    img.nextElementSibling.classList.add("show");
  }

  img.addEventListener("error", tryNext);
  tryNext();
}

const grid = document.getElementById("projects");

projects.forEach((project) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = project.path;
  card.innerHTML = `
    <div class="card-preview">
      <img alt="Preview of ${project.name}" loading="lazy" />
      <div class="fallback">Preview unavailable</div>
    </div>
    <div class="card-body">
      <div class="card-tag">${project.tag}</div>
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <div class="card-footer">
        <span>Open project</span>
        <span class="card-arrow" aria-hidden="true">→</span>
      </div>
    </div>
  `;

  setPreviewImage(card.querySelector("img"), project);
  grid.appendChild(card);
});
