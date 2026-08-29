const STORAGE_KEY = "daylily-workspace-v1";

const iconPaths = {
  sun: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  sparkles: '<path d="m12 3-1.1 3.2a4 4 0 0 1-2.6 2.6L5 10l3.3 1.1a4 4 0 0 1 2.6 2.6L12 17l1.1-3.3a4 4 0 0 1 2.6-2.6L19 10l-3.3-1.2a4 4 0 0 1-2.6-2.6L12 3Z"/><path d="m5 3-.4 1.1a2 2 0 0 1-1.3 1.3L2 6l1.3.5a2 2 0 0 1 1.3 1.3L5 9l.5-1.2a2 2 0 0 1 1.3-1.3L8 6l-1.2-.6a2 2 0 0 1-1.3-1.3L5 3ZM19 16l-.6 1.7a2.7 2.7 0 0 1-1.7 1.7L15 20l1.7.6a2.7 2.7 0 0 1 1.7 1.7L19 24l.6-1.7a2.7 2.7 0 0 1 1.7-1.7L23 20l-1.7-.6a2.7 2.7 0 0 1-1.7-1.7L19 16Z"/>',
  notebook: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5v-18Z"/><path d="M4 18h16M8 2v16"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
  feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5Z"/><path d="M16 8 2 22M17.5 15H9"/>',
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "calendar-heart": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M12 18s-3-1.7-3-3.5a1.7 1.7 0 0 1 3-1.1 1.7 1.7 0 0 1 3 1.1C15 16.3 12 18 12 18Z"/>',
  pinterest: '<path d="M12 2a10 10 0 0 0-3.64 19.31c-.08-1.58-.02-3.47.39-5.23l1.28-5.41s-.32-.65-.32-1.62c0-1.52.88-2.65 1.98-2.65.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.55 1.98 1.62 1.98 1.94 0 3.43-2.05 3.43-5.01 0-2.62-1.88-4.45-4.57-4.45-3.11 0-4.94 2.34-4.94 4.75 0 .94.36 1.95.82 2.5.09.11.1.21.08.32l-.3 1.22c-.05.2-.16.24-.37.15-1.38-.64-2.24-2.66-2.24-4.28 0-3.49 2.54-6.69 7.31-6.69 3.84 0 6.82 2.73 6.82 6.39 0 3.81-2.4 6.88-5.74 6.88-1.12 0-2.18-.58-2.54-1.27l-.69 2.63c-.25.96-.93 2.17-1.38 2.91.91.28 1.85.43 2.83.43A10 10 0 0 0 12 2Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v6M14 11v6"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M18 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  palette: '<circle cx="12" cy="12" r="9"/><path d="M7.5 10h.01M9.5 6.8h.01M13.5 6.5h.01M17 9h.01"/><path d="M16.5 15.5c0 1.5-1.3 2.5-2.7 2.5H12a1.8 1.8 0 0 1 0-3.5h1.2c.8 0 1.3-.5 1.3-1.2"/>',
  sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  brush: '<path d="m14.5 4.5 5 5L11 18H6v-5Z"/><path d="M5.5 18c0 2-1.2 3-3.5 3 .8-1 1-2 .5-3.2-.4-1.3.5-2.8 1.9-2.8H6"/><path d="m13 6 5 5"/>',
  "pen-line": '<path d="m12 19 7-7 3 3-7 7-4 1Z"/><path d="m18 13-7-7-8 8v4h4l8-8"/><path d="M3 22h6"/>',
  yarn: '<circle cx="12" cy="12" r="8"/><path d="M7 6.5c4 3 7.5 7 9.5 11M5 10c5 0 10 2.5 14 6M6 16c3-3 7-5 13-5M20 20c1.5 0 2.5.7 2.5 2"/>',
  camera: '<path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  folder: '<path d="M3 5h7l2 2h9v12H3Z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  quote: '<path d="M9 11H4a5 5 0 0 1 5-5v10H4v-5M20 11h-5a5 5 0 0 1 5-5v10h-5v-5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
};

const svgIcon = (name, label = "") => {
  const aria = label ? `role="img" aria-label="${escapeHTML(label)}"` : 'aria-hidden="true"';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${aria}>${iconPaths[name] || ""}</svg>`;
};

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((element) => {
    const iconName = element.dataset.icon;
    if (!element.querySelector("svg")) element.innerHTML = svgIcon(iconName);
  });
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function conciseText(value, limit) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text.length > limit ? `${text.slice(0, Math.max(0, limit - 3)).trimEnd()}...` : text;
}

function localISO(date = new Date()) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

const today = new Date();
const todayISO = localISO(today);

const adminPageMeta = {
  today: { label: "Today", icon: "sun" },
  planner: { label: "Planner", icon: "calendar" },
  hobbies: { label: "Hobby studios", icon: "palette" },
  inspiration: { label: "Inspiration", icon: "sparkles" },
  notes: { label: "Notes", icon: "notebook" },
};

const defaultAdminConfig = {
  brandName: "daylily",
  homeView: "today",
  order: ["today", "planner", "hobbies", "inspiration", "notes"],
  hiddenViews: [],
  navLabels: Object.fromEntries(Object.entries(adminPageMeta).map(([key, page]) => [key, page.label])),
  appearance: { fontStyle: "editorial", cornerStyle: "soft", cardStyle: "elevated", contentWidth: "focused", highContrast: true, motion: true },
  elementStyles: {},
  copy: {
    today: { eyebrow: "", lead: "Make space for", accent: "what matters.", intro: "A gentle view of your day, with room for the ideas that find you." },
    planner: { eyebrow: "Shape your time", lead: "The", accent: "weekly rhythm.", intro: "Move through the week one intentional moment at a time." },
    hobbies: { eyebrow: "Your creative practice, your way", lead: "Choose a room to", accent: "make in.", intro: "Start with a thoughtful hobby template, then keep only the tools that support your rhythm." },
    inspiration: { eyebrow: "Your visual garden", lead: "Gather what", accent: "moves you.", intro: "Collect references, connect ideas, and remember why you saved them." },
    notes: { eyebrow: "A place for the words", lead: "Notes, threads &", accent: "tiny ideas.", intro: "Write loosely now. Organize only when it helps." },
  },
};

const defaultState = {
  view: "today",
  selectedDate: todayISO,
  focus: "Create with curiosity, not pressure.",
  weekNote: "",
  mood: "bright",
  theme: "linen",
  customAccent: "",
  cozy: true,
  adminConfig: structuredClone(defaultAdminConfig),
  profile: { name: "Jodie Rivera", email: "" },
  activeHobby: "art",
  hobbyHome: false,
  hobbyModules: {
    art: { references: true, prompts: true, project: true },
    writing: { prompts: true, projects: true, journal: true },
    crochet: { search: true, sources: true, queue: true },
  },
  hobbyNotes: { art: "", writing: "", crochet: "" },
  events: [
    { id: crypto.randomUUID(), title: "Slow morning & intentions", date: todayISO, time: "08:30", duration: 30, notes: "Coffee, journal, and choose one focus.", color: "sage" },
    { id: crypto.randomUUID(), title: "Creative deep work", date: todayISO, time: "10:00", duration: 90, notes: "Moodboard direction and first round of layouts.", color: "coral" },
    { id: crypto.randomUUID(), title: "Gallery wander", date: todayISO, time: "15:00", duration: 60, notes: "Leave room to notice materials and color.", color: "violet" },
    { id: crypto.randomUUID(), title: "Weekly reset", date: localISO(addDays(today, 1)), time: "09:30", duration: 45, notes: "Clear the desk and look gently at the week ahead.", color: "blue" },
  ],
  inspirations: [
    { id: crypto.randomUUID(), title: "Sun-warmed geometry", category: "Palette", tags: ["ochre", "shape"], note: "Quiet forms with a cheerful kind of tension.", image: "assets/art-sun.svg", source: "Pinterest", sourceUrl: "", ratio: "4 / 5", saved: true },
    { id: crypto.randomUUID(), title: "A table for making", category: "Spaces", tags: ["studio", "calm"], note: "The work surface feels useful, imperfect, and lived in.", image: "assets/art-studio.svg", source: "Web", sourceUrl: "", ratio: "5 / 6", saved: false },
    { id: crypto.randomUUID(), title: "Tender type studies", category: "Brand", tags: ["type", "editorial"], note: "Soft serif details paired with generous white space.", image: "assets/art-type.svg", source: "Pinterest", sourceUrl: "", ratio: "1 / 1", saved: true },
    { id: crypto.randomUUID(), title: "Botanical fragments", category: "Ideas", tags: ["nature", "texture"], note: "Pressed shapes that could become a border or repeating motif.", image: "assets/art-botanical.svg", source: "Pinterest", sourceUrl: "", ratio: "4 / 6", saved: false },
    { id: crypto.randomUUID(), title: "Seaside color note", category: "Palette", tags: ["blue", "sand"], note: "A weathered blue next to chalky cream and soft rust.", image: "assets/art-coast.svg", source: "Web", sourceUrl: "", ratio: "5 / 4", saved: true },
    { id: crypto.randomUUID(), title: "Playful paper systems", category: "Brand", tags: ["paper", "identity"], note: "A modular identity that still feels handmade.", image: "assets/art-paper.svg", source: "Pinterest", sourceUrl: "", ratio: "4 / 5", saved: false },
  ],
  notes: [
    { id: crypto.randomUUID(), title: "What I want this season to feel like", tags: ["reflection", "direction"], body: "Less rushing toward the finished thing.\n\nMore collecting, arranging, and letting the shape reveal itself. I want the work to feel warm, tactile, and quietly surprising.", updatedAt: Date.now() },
    { id: crypto.randomUUID(), title: "Studio rituals", tags: ["process"], body: "Open the window. Put one beautiful book on the desk. Make the first mark before checking messages.", updatedAt: Date.now() - 86_400_000 },
    { id: crypto.randomUUID(), title: "Names for the small project", tags: ["naming", "ideas"], body: "Daylily\nCommon Thread\nSmall Hours\nHeld Light\nThe Gentle Index", updatedAt: Date.now() - 172_800_000 },
  ],
  activeNoteId: null,
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...stored,
      profile: { ...defaultState.profile, ...(stored.profile || {}) },
      adminConfig: {
        ...structuredClone(defaultAdminConfig),
        ...(stored.adminConfig || {}),
        appearance: { ...defaultAdminConfig.appearance, ...(stored.adminConfig?.appearance || {}) },
        navLabels: { ...defaultAdminConfig.navLabels, ...(stored.adminConfig?.navLabels || {}) },
        copy: Object.fromEntries(Object.keys(adminPageMeta).map((key) => [key, { ...defaultAdminConfig.copy[key], ...(stored.adminConfig?.copy?.[key] || {}) }])),
        elementStyles: stored.adminConfig?.elementStyles && typeof stored.adminConfig.elementStyles === "object" ? stored.adminConfig.elementStyles : {},
      },
      hobbyModules: {
        art: { ...defaultState.hobbyModules.art, ...(stored.hobbyModules?.art || {}) },
        writing: { ...defaultState.hobbyModules.writing, ...(stored.hobbyModules?.writing || {}) },
        crochet: { ...defaultState.hobbyModules.crochet, ...(stored.hobbyModules?.crochet || {}) },
      },
      hobbyNotes: { ...defaultState.hobbyNotes, ...(stored.hobbyNotes || {}) },
      events: Array.isArray(stored.events) ? stored.events : defaultState.events,
      inspirations: Array.isArray(stored.inspirations) ? stored.inspirations : defaultState.inspirations,
      notes: Array.isArray(stored.notes) && stored.notes.length ? stored.notes : defaultState.notes,
    };
  } catch {
    return structuredClone(defaultState);
  }
}

let state = loadState();
if (!state.activeNoteId || !state.notes.some((note) => note.id === state.activeNoteId)) {
  state.activeNoteId = state.notes[0]?.id || null;
}

let createdEventId = null;
let inspirationFilter = "all";
let inspirationSearch = "";
let noteSearch = "";
let writingFilter = "daily";
let crochetCategory = "scarves";
let crochetQuery = "";
let crochetSourceFilter = "all";
let liveCrochetResults = [];
let crochetSearchStatus = "curated";
let saveTimer;
let visualEditorActive = false;
let selectedEditorKey = "";

const artReferences = [
  {
    id: "fruit-study",
    title: "Fruit & ceramic still life",
    focus: "Color, reflected light, and rounded form",
    prompt: "Limit yourself to five mixed colors and look for the coolest shadow.",
    image: "https://images.pexels.com/photos/12845018/pexels-photo-12845018.jpeg?auto=compress&cs=tinysrgb&w=1200",
    source: "Pexels · Nandhu Kumar",
    sourceUrl: "https://www.pexels.com/photo/12845018/",
  },
  {
    id: "mountain-study",
    title: "Mountain reflected in still water",
    focus: "Large shapes, atmosphere, and symmetry",
    prompt: "Block the scene in with only three values before adding color.",
    image: "https://images.pexels.com/photos/6827528/pexels-photo-6827528.jpeg?auto=compress&cs=tinysrgb&w=1200",
    source: "Pexels · Dario Fernandez Ruz",
    sourceUrl: "https://www.pexels.com/photo/mountain-reflection-on-the-placid-lake-surface-6827528/",
  },
  {
    id: "shadow-study",
    title: "Doorway & geometric shadow",
    focus: "Negative space, edges, and contrast",
    prompt: "Draw the shadow shapes first and let the doorway emerge around them.",
    image: "https://images.pexels.com/photos/6101502/pexels-photo-6101502.jpeg?auto=compress&cs=tinysrgb&w=1200",
    source: "Pexels · Robin Singh",
    sourceUrl: "https://www.pexels.com/photo/shadows-on-building-door-6101502/",
  },
];

const artDailyPrompts = [
  "Paint an ordinary object as if it were a tiny monument.",
  "Draw a moving subject using one continuous line.",
  "Build a landscape from three shapes and one surprising color.",
  "Study only the shadows on a plant for fifteen minutes.",
  "Make a self-portrait without drawing any facial features.",
  "Turn the view from your window into an abstract pattern.",
  "Draw the same object once from memory and once from observation.",
];

const writingPrompts = [
  { id: "wd-space", category: "daily", label: "Daily fiction", prompt: "Begin with a room where gravity behaves differently for exactly one person.", source: "Writer’s Digest prompt library", sourceUrl: "https://www.writersdigest.com/prompts", time: "15 min" },
  { id: "reedsy-object", category: "daily", label: "Daily fiction", prompt: "A borrowed object returns years later with a note tucked inside it.", source: "Reedsy Prompts directory", sourceUrl: "https://reedsy.com/creative-writing-prompts/", time: "20 min" },
  { id: "wd-pov", category: "daily", label: "Point of view", prompt: "Retell a familiar conflict from the perspective of the person causing it.", source: "Writer’s Digest prompt library", sourceUrl: "https://www.writersdigest.com/prompts", time: "20 min" },
  { id: "reedsy-mystery", category: "daily", label: "Mystery", prompt: "Everyone remembers the town festival except the person who organized it.", source: "Reedsy Prompts directory", sourceUrl: "https://reedsy.com/creative-writing-prompts/", time: "25 min" },
  { id: "project-scene", category: "projects", label: "Continue a project", prompt: "Write the scene your protagonist has been avoiding. Let them enter late and leave with the wrong conclusion.", source: "Daylily project practice · informed by Reedsy’s writing-routine guidance", sourceUrl: "https://reedsy.com/creative-writing-prompts/", time: "30 min" },
  { id: "project-thread", category: "projects", label: "Story thread", prompt: "Choose one quiet detail from an earlier chapter and make it matter in the next scene.", source: "Daylily project practice", sourceUrl: "https://reedsy.com/creative-writing-prompts/", time: "25 min" },
  { id: "project-voice", category: "projects", label: "Voice check", prompt: "Rewrite one page using only words your viewpoint character would naturally notice.", source: "Daylily project practice", sourceUrl: "https://www.writersdigest.com/prompts", time: "20 min" },
  { id: "journal-gratitude", category: "journal", label: "Grounding", prompt: "Name three things that went well today. For each one, explore what helped it happen and how it affected you.", source: "U.S. Department of Veterans Affairs · Therapeutic Journaling", sourceUrl: "https://www.va.gov/WHOLEHEALTHLIBRARY/docs/therapeutic-journaling.pdf", time: "10 min" },
  { id: "journal-chapter", category: "journal", label: "Life story", prompt: "If this season were a chapter, what would you call it? Describe what it is teaching you about your needs and direction.", source: "VA guided-autobiography overview", sourceUrl: "https://www.va.gov/WHOLEHEALTHLIBRARY/docs/therapeutic-journaling.pdf", time: "15 min" },
  { id: "journal-expression", category: "journal", label: "Expressive writing", prompt: "Choose a challenge that feels manageable today. Write freely about its effects and connections without editing yourself.", source: "Greater Good in Action · UC Berkeley", sourceUrl: "https://ggia.berkeley.edu/practice/expressive_writing%C2%A0", time: "20 min" },
  { id: "journal-observer", category: "journal", label: "Perspective", prompt: "Describe a difficult moment from the view of a kind, neutral observer. What might they notice that you could not see then?", source: "Greater Good in Action · UC Berkeley", sourceUrl: "https://ggia.berkeley.edu/practice/expressive_writing%C2%A0", time: "15 min" },
];

const crochetCategories = ["scarves", "hats", "lace", "shirts", "blouses", "jackets", "amigurumi"];

const crochetSources = [
  { name: "Ravelry", description: "Large pattern database with craft, availability, and category filters.", url: "https://www.ravelry.com/patterns/search", accent: "ravelry" },
  { name: "Yarnspirations", description: "Free crochet patterns from brands including Bernat, Caron, and Red Heart.", url: "https://www.yarnspirations.com/collections/patterns", accent: "yarnspirations" },
  { name: "LoveCrafts", description: "A broad library of free crochet pattern downloads.", url: "https://www.lovecrafts.com/en-us/l/crochet/crochet-patterns/free-crochet-patterns", accent: "lovecrafts" },
  { name: "AllFreeCrochet", description: "Free patterns, tutorials, and category roundups.", url: "https://www.allfreecrochet.com/", accent: "allfree" },
];

const crochetPatternIndex = [
  { id: "ravelry-sunshine", title: "Sunshine Scarf and Hat", source: "Ravelry", designer: "Pamela Kuloba", categories: ["scarves", "hats"], difficulty: "Easy", url: "https://www.ravelry.com/patterns/library/sunshine-scarf-and-hat", description: "A striped scarf-and-hat set using simple stitches and a 5 mm hook." },
  { id: "ravelry-sfo", title: "SFO Hat", source: "Ravelry", designer: "carolemon design", categories: ["hats"], difficulty: "Easy", url: "https://www.ravelry.com/patterns/library/sfo-hat", description: "A practical beret-style hat for teens and adults." },
  { id: "ravelry-snowman", title: "Amigurumi Snowman with Hat and Scarf", source: "Ravelry", designer: "Kristin Van Solkema", categories: ["amigurumi", "hats", "scarves"], difficulty: "Intermediate", url: "https://www.ravelry.com/patterns/library/amigurumi-snowman-with-hat-and-scarf", description: "A small snowman with removable accessories, worked in continuous rounds." },
  { id: "ravelry-wrap", title: "Sweater Wrap Scarf", source: "Ravelry", designer: "Carrie M Chambers", categories: ["jackets", "scarves", "shirts"], difficulty: "Intermediate", url: "https://www.ravelry.com/patterns/library/sweater-wrap-scarf", description: "A one-piece wearable scarf that wraps into a cardigan-like layer." },
  { id: "yarn-perfect", title: "Simply Perfect Crochet Cardigan", source: "Yarnspirations", designer: "Caron", categories: ["jackets", "shirts"], difficulty: "Easy", url: "https://www.yarnspirations.com/products/caron-simply-perfect-crochet-cardigan", description: "A relaxed buttoned cardigan with inclusive sizing and a free download." },
  { id: "yarn-lace", title: "On the Lace Crochet Cardigan", source: "Yarnspirations", designer: "Bernat", categories: ["lace", "jackets", "blouses"], difficulty: "Intermediate", url: "https://www.yarnspirations.com/products/bernat-on-the-lace-crochet-cardigan", description: "A bright lacy cardigan designed to layer over dresses or denim." },
  { id: "yarn-nordic", title: "Nordic Crochet Hat", source: "Yarnspirations", designer: "Patons", categories: ["hats"], difficulty: "Intermediate", url: "https://www.yarnspirations.com/en-row/products/patons-nordic-crochet-hat", description: "A colorwork winter hat using split single crochet and wool yarn." },
  { id: "love-woven", title: "Woven Stitch Hat & Scarf", source: "LoveCrafts", designer: "Red Heart US", categories: ["hats", "scarves"], difficulty: "Easy", url: "https://www.lovecrafts.com/en-us/p/woven-stitch-hat-scarf-in-red-heart-with-love-multis-lw3319", description: "A free downloadable two-pattern set using a textured woven stitch." },
  { id: "love-americana", title: "Americana Hat & Scarf", source: "LoveCrafts", designer: "Lion Brand", categories: ["hats", "scarves"], difficulty: "Easy", url: "https://www.lovecrafts.com/en-us/p/americana-hat-scarf-in-lion-brand-wool-ease", description: "A free two-piece hat and scarf PDF worked with warm worsted-weight yarn." },
  { id: "love-boston-hat", title: "Crocheted Hat in Schachenmayr Boston", source: "LoveCrafts", designer: "Schachenmayr", categories: ["hats"], difficulty: "Easy", url: "https://www.lovecrafts.com/en-us/p/crocheted-hat-in-schachenmayr-boston-3883-downloadable-pdf", description: "A quick bulky-yarn hat with a pompom and multilingual instructions." },
  { id: "love-aspen-hat", title: "Aspen Hat", source: "LoveCrafts", designer: "Schachenmayr", categories: ["hats"], difficulty: "Easy", url: "https://www.lovecrafts.com/en-us/p/aspen-hat-in-schachenmayr-bravo-big-color-and-boston-style-dc1011", description: "A free chunky color-blocked hat pattern using two hook sizes." },
  { id: "love-beach-wrap", title: "By the Beach Wrap", source: "LoveCrafts", designer: "Paintbox Yarns", categories: ["lace", "scarves", "blouses"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/products/by-the-beach-wrap-free-shawl-crochet-pattern-for-women-in-paintbox-yarns-cotton-mix-dk-by-paintbox-yarns", description: "A striped, puff-stitch wrap inspired by coastal colors and worked flat." },
  { id: "love-pardus", title: "Pardus Fair Isle Shawl", source: "LoveCrafts", designer: "Paintbox Yarns", categories: ["lace", "scarves", "blouses"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/products/pardus-fair-isle-shawl-free-crochet-pattern-for-women-in-paintbox-yarns", description: "A dramatic free colorwork shawl with animal-print motifs and stripes." },
  { id: "love-solaris", title: "Solaris Crochet Top", source: "LoveCrafts", designer: "Cassie Ward", categories: ["shirts", "blouses", "lace"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/products/solaris-crochet-top-free-pattern-for-women-in-paintbox-yarns-cotton-dk", description: "A flower-motif summer top with seven sizes and bright colorwork." },
  { id: "love-cool-shirt", title: "Cool Shirt", source: "LoveCrafts", designer: "Paintbox Yarns", categories: ["shirts", "blouses"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/products/cool-shirt-free-crochet-pattern-for-women-in-paintbox-yarns-cotton-mix-dk-by-paintbox-yarns", description: "A lightweight collared shirt offered in seven inclusive chest sizes." },
  { id: "love-kahlo", title: "Kahlo Crop Top", source: "LoveCrafts", designer: "Paintbox Yarns", categories: ["shirts", "blouses", "lace"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/p/kahlo-crop-top-free-crochet-pattern-for-women-in-paintbox-yarns-cotton-dk", description: "A colorful cotton crop top assembled from graphic crochet motifs." },
  { id: "love-seafoam", title: "Seafoam Shirt", source: "LoveCrafts", designer: "Paintbox Yarns", categories: ["shirts", "blouses", "lace"], difficulty: "Beginner", url: "https://www.lovecrafts.com/en-us/p/seafoam-shirt-free-top-crochet-pattern-for-women-in-paintbox-yarns-cotton-4-ply-by-paintbox-yarns", description: "A beginner-friendly V-neck summer shirt with sizes through a 58-inch chest." },
  { id: "love-blooming-bomber", title: "Blooming Bomber Jacket", source: "LoveCrafts", designer: "Katie Jones", categories: ["jackets", "shirts"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/products/blooming-bomber-jacket-free-crochet-pattern-for-women-in-paintbox-yarns-simply-aran", description: "A bold striped bomber with granny-square pockets and vivid color changes." },
  { id: "love-mollie", title: "Mollie the Bunny", source: "LoveCrafts", designer: "Paintbox Yarns", categories: ["amigurumi"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/products/mollie-the-bunny-free-toy-crochet-pattern-for-kids-in-paintbox-yarns-cotton-aran-by-paintbox-yarns", description: "A free 31 cm cotton bunny worked in the round and assembled as a soft toy." },
  { id: "love-norman", title: "Norman the Sheep", source: "LoveCrafts", designer: "Paintbox Yarns", categories: ["amigurumi"], difficulty: "Intermediate", url: "https://www.lovecrafts.com/en-us/p/norman-the-sheep-free-toy-crochet-pattern-for-boys-girls-in-paintbox-yarns-cotton-aran-by-paintbox-yarns", description: "A free bobble-textured sheep toy pattern worked in the round." },
  { id: "afc-cowl", title: "Chunky Crochet Cowl", source: "AllFreeCrochet", designer: "AllFreeCrochet editors", categories: ["scarves"], difficulty: "Beginner", url: "https://www.allfreecrochet.com/pdf_download.php?id=632", description: "A thick, textured scarf-style cowl for a quick cold-weather project." },
  { id: "afc-amigurumi", title: "Free Amigurumi Pattern Library", source: "AllFreeCrochet", designer: "Multiple designers", categories: ["amigurumi"], difficulty: "All levels", url: "https://www.allfreecrochet.com/Crochet-Amigurumi-Patterns", description: "A large browsable collection of animals, characters, plants, and mini makes." },
  { id: "afc-shawls", title: "16 Crochet Shawl Patterns", source: "AllFreeCrochet", designer: "Multiple designers", categories: ["lace", "scarves", "blouses"], difficulty: "Mixed", url: "https://www.allfreecrochet.com/pdf_download.php?id=148", description: "A free collection of wearable shawls, including lacy and scalloped styles." },
];

const PATTERN_SEARCH_ENDPOINT = window.DAYLILY_CONFIG?.patternSearchEndpoint || "";

const hobbyModuleMeta = {
  art: [
    { key: "references", title: "Daily photo references", description: "Real reference photos with note, reminder, and save actions." },
    { key: "prompts", title: "Prompts & practice sites", description: "A rotating prompt plus trusted drawing practice links." },
    { key: "project", title: "Current art project", description: "A small planning card for the piece you are making now." },
  ],
  writing: [
    { key: "prompts", title: "Daily writing prompts", description: "Source-linked fiction prompts and quick starts." },
    { key: "projects", title: "Existing project tools", description: "Prompts designed to move a longer work forward." },
    { key: "journal", title: "Reflective journaling", description: "Cautious prompts adapted from cited therapeutic sources." },
  ],
  crochet: [
    { key: "search", title: "Pattern search", description: "Category shortcuts and a free-pattern search box." },
    { key: "sources", title: "Pattern websites", description: "Direct links to established free pattern libraries." },
    { key: "queue", title: "Project queue", description: "Save a pattern idea and choose when you want to begin." },
  ],
};

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function debouncePersist() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(persist, 180);
}

function readableTime(time) {
  if (!time) return "";
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour = hours % 12 || 12;
  return `${hour}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function readableDuration(minutes) {
  const value = Number(minutes);
  if (value < 60) return `${value} min`;
  const hours = Math.floor(value / 60);
  const rest = value % 60;
  return rest ? `${hours}h ${rest}m` : `${hours} hr`;
}

function dateFromISO(iso) {
  return new Date(`${iso}T12:00:00`);
}

function colorValue(color) {
  return `var(--${{ coral: "accent", sage: "secondary", blue: "blue", violet: "violet" }[color] || "accent"})`;
}

function sortedEvents(date) {
  return state.events.filter((event) => event.date === date).sort((a, b) => a.time.localeCompare(b.time));
}

function eventMenuMarkup(event) {
  return `<div class="event-menu">
    <button class="event-menu-trigger" type="button" data-event-menu="${event.id}" aria-label="Actions for ${escapeHTML(event.title)}">${svgIcon("more")}</button>
    <div class="event-actions-popover">
      <button type="button" data-event-action="google" data-event-id="${event.id}">${svgIcon("external")} Google Calendar</button>
      <button type="button" data-event-action="apple" data-event-id="${event.id}">${svgIcon("download")} Apple Calendar</button>
      <button class="delete-action" type="button" data-event-action="delete" data-event-id="${event.id}">${svgIcon("trash")} Delete moment</button>
    </div>
  </div>`;
}

function renderTodaySchedule() {
  const container = document.querySelector("#today-schedule");
  const events = sortedEvents(todayISO);
  container.innerHTML = events.length
    ? events.map((event) => `<article class="schedule-event">
        <time class="event-time">${readableTime(event.time)}</time>
        <span class="event-dot" style="--event-color:${colorValue(event.color)}"></span>
        <div class="event-copy"><strong>${escapeHTML(event.title)}</strong><span>${readableDuration(event.duration)}${event.notes ? ` · ${escapeHTML(event.notes)}` : ""}</span></div>
        ${eventMenuMarkup(event)}
      </article>`).join("")
    : `<div class="empty-state"><strong>A wide-open day</strong>Add a moment when you are ready.</div>`;

  const planned = events.length;
  const target = 5;
  const percent = Math.min(100, Math.round((planned / target) * 100));
  document.querySelector("#progress-ring").style.setProperty("--progress", `${percent}%`);
  document.querySelector("#progress-number").textContent = `${percent}%`;
  document.querySelector("#progress-caption").textContent = `${planned} of ${target} moments planned`;
  document.querySelector("#ritual-progress").textContent = planned;
}

function startOfWeek(date) {
  const start = new Date(date);
  const mondayOffset = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - mondayOffset);
  return start;
}

function renderWeekStrip() {
  const selected = dateFromISO(state.selectedDate);
  const start = startOfWeek(selected);
  document.querySelector("#week-strip").innerHTML = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(start, index);
    const iso = localISO(date);
    const hasEvents = state.events.some((event) => event.date === iso);
    return `<button class="week-day ${iso === state.selectedDate ? "is-selected" : ""}" type="button" data-select-date="${iso}" aria-label="${date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}">
      <span>${date.toLocaleDateString(undefined, { weekday: "short" })}</span>
      <strong>${date.getDate()}</strong>
      ${hasEvents ? "<i></i>" : "<i style=\"opacity:0\"></i>"}
    </button>`;
  }).join("");
}

function renderPlannerSchedule() {
  const date = dateFromISO(state.selectedDate);
  const events = sortedEvents(state.selectedDate);
  document.querySelector("#planner-date-label").textContent = date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
  document.querySelector("#planner-day-title").textContent = state.selectedDate === todayISO ? "Today’s flow" : date.toLocaleDateString(undefined, { weekday: "long" });
  document.querySelector("#planner-schedule").innerHTML = events.length
    ? events.map((event) => `<article class="planner-event">
        <time class="event-time">${readableTime(event.time)}</time>
        <span class="planner-event-bar" style="--event-color:${colorValue(event.color)}"></span>
        <div class="event-copy"><strong>${escapeHTML(event.title)}</strong><span>${readableDuration(event.duration)}${event.notes ? ` · ${escapeHTML(event.notes)}` : ""}</span></div>
        ${eventMenuMarkup(event)}
      </article>`).join("")
    : `<div class="empty-state"><strong>Nothing planned yet</strong>This day has room for something lovely. <button class="text-button" type="button" data-open-event>Add a moment</button></div>`;
}

function renderTodayInspiration() {
  const item = state.inspirations.find((inspiration) => inspiration.saved) || state.inspirations[0];
  const container = document.querySelector("#today-inspiration");
  if (!item) {
    container.innerHTML = `<div class="empty-state">Your saved inspiration will appear here.</div>`;
    return;
  }
  const image = item.image
    ? `<img src="${escapeHTML(item.image)}" alt="" />`
    : `<span aria-hidden="true">✦</span>`;
  container.innerHTML = `<div class="spark-preview">
    <div class="spark-image">${image}</div>
    <div class="spark-copy"><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.note)}</p><span class="tag">${escapeHTML(item.category)}</span></div>
  </div>`;
}

function safeURL(value) {
  if (!value) return "";
  try {
    const parsed = new URL(value, window.location.href);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
}

function renderInspirations() {
  const filtered = state.inspirations.filter((item) => {
    const categoryMatch = inspirationFilter === "all" || item.category === inspirationFilter;
    const haystack = `${item.title} ${item.note} ${item.category} ${item.tags.join(" ")}`.toLowerCase();
    return categoryMatch && (!inspirationSearch || haystack.includes(inspirationSearch.toLowerCase()));
  });
  document.querySelector("#inspiration-count").textContent = state.inspirations.length;
  document.querySelector("#inspiration-grid").innerHTML = filtered.length
    ? filtered.map((item) => {
        const imageURL = safeURL(item.image) || (item.image?.startsWith("assets/") ? item.image : "");
        const image = imageURL
          ? `<img src="${escapeHTML(imageURL)}" alt="${escapeHTML(item.title)}" loading="lazy" />`
          : `<span aria-hidden="true">✦</span>`;
        return `<article class="inspiration-card">
          <div class="inspiration-image ${imageURL ? "" : "placeholder-art"}" style="--ratio:${escapeHTML(item.ratio || "4 / 5")}">
            ${image}
            <span class="pin-source">${item.source === "Pinterest" ? svgIcon("pinterest") : svgIcon("link")} ${escapeHTML(item.source || "Saved")}</span>
            <button class="pin-save ${item.saved ? "is-saved" : ""}" data-toggle-save="${item.id}" type="button" aria-label="${item.saved ? "Unsave" : "Save"} ${escapeHTML(item.title)}">${svgIcon(item.saved ? "check" : "bookmark")}</button>
          </div>
          <div class="inspiration-content">
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.note || "A visual thought worth keeping close.")}</p>
            <div class="tag-row"><span class="tag">${escapeHTML(item.category)}</span>${item.tags.slice(0, 2).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
          </div>
        </article>`;
      }).join("")
    : `<div class="empty-state"><strong>No sparks found</strong>Try another collection or search phrase.</div>`;
}

function formatRelativeDate(timestamp) {
  const days = Math.round((Date.now() - timestamp) / 86_400_000);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

function activeNote() {
  return state.notes.find((note) => note.id === state.activeNoteId) || state.notes[0];
}

function renderNotesList() {
  const notes = [...state.notes]
    .filter((note) => `${note.title} ${note.body} ${note.tags.join(" ")}`.toLowerCase().includes(noteSearch.toLowerCase()))
    .sort((a, b) => b.updatedAt - a.updatedAt);
  document.querySelector("#notes-list").innerHTML = notes.length
    ? notes.map((note) => {
        const title = note.title || "Untitled note";
        const body = note.body || "An empty page";
        return `<button class="note-list-item ${note.id === state.activeNoteId ? "is-active" : ""}" type="button" data-note-id="${note.id}" aria-label="Open note: ${escapeHTML(title)}"><strong title="${escapeHTML(title)}">${escapeHTML(conciseText(title, 38))}</strong><span title="${escapeHTML(body)}">${escapeHTML(conciseText(body, 64))}</span><small>${formatRelativeDate(note.updatedAt)}</small></button>`;
      }).join("")
    : `<div class="empty-state">No matching notes.</div>`;
}

function renderNoteEditor() {
  const note = activeNote();
  const title = document.querySelector("#note-title");
  const tags = document.querySelector("#note-tags");
  const body = document.querySelector("#note-body");
  const disabled = !note;
  [title, tags, body].forEach((input) => { input.disabled = disabled; });
  title.value = note?.title || "";
  tags.value = note?.tags.join(", ") || "";
  body.value = note?.body || "";
}

function renderProfile() {
  const name = state.profile.name?.trim() || "Creative friend";
  const initials = name.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  document.querySelector("#profile-name").textContent = name;
  document.querySelector("#profile-avatar").textContent = initials;
  document.querySelector("#account-avatar").textContent = initials;
  document.querySelector("#account-name").value = name;
  document.querySelector("#account-email").value = state.profile.email || "";
}

function hobbyModuleEnabled(key) {
  return state.hobbyModules[state.activeHobby]?.[key] !== false;
}

function sourceCitation(label, url) {
  return `<a class="source-citation" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ${svgIcon("arrow-up-right")}</a>`;
}

function renderHobbyTabs() {
  document.querySelectorAll("[data-hobby]").forEach((button) => {
    const selected = button.dataset.hobby === state.activeHobby;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
}

function renderArtStudio() {
  const dailyPrompt = artDailyPrompts[Math.floor(Date.now() / 86_400_000) % artDailyPrompts.length];
  const referenceSection = hobbyModuleEnabled("references") ? `
    <section class="studio-section">
      <div class="section-heading">
        <div><p class="card-kicker">Licensed, real-world photography</p><h2>Today’s reference deck</h2></div>
        ${sourceCitation("Pexels source pages", "https://www.pexels.com/")}
      </div>
      <div class="reference-grid">
        ${artReferences.map((reference) => `<article class="reference-card card">
          <a class="reference-photo" href="${escapeHTML(reference.sourceUrl)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHTML(reference.image)}" alt="${escapeHTML(reference.title)}" loading="lazy" /></a>
          <div class="reference-copy"><span class="reference-focus">${escapeHTML(reference.focus)}</span><h3>${escapeHTML(reference.title)}</h3><p>${escapeHTML(reference.prompt)}</p>
            <a class="photo-credit" href="${escapeHTML(reference.sourceUrl)}" target="_blank" rel="noopener noreferrer">Photo: ${escapeHTML(reference.source)} ${svgIcon("arrow-up-right")}</a>
            <div class="reference-actions">
              <button type="button" data-reference-note="${reference.id}">${svgIcon("notebook")} Note</button>
              <button type="button" data-reference-remind="${reference.id}">${svgIcon("calendar")} Plan</button>
              <button type="button" data-reference-save="${reference.id}">${svgIcon("bookmark")} Save</button>
            </div>
          </div>
        </article>`).join("")}
      </div>
    </section>` : "";

  const promptSection = hobbyModuleEnabled("prompts") ? `
    <div class="studio-feature-grid">
      <article class="daily-prompt-card card art-prompt-card">
        <div class="prompt-orbit" aria-hidden="true"><span>✦</span></div>
        <p class="card-kicker">Daily art invitation</p><h2>${escapeHTML(dailyPrompt)}</h2>
        <p>Keep it small: twenty minutes, one page, no need to finish.</p>
        <div class="prompt-actions"><button class="primary-button" type="button" data-art-prompt-note>${svgIcon("brush")} Begin a study</button><button class="secondary-button" type="button" data-art-prompt-plan>${svgIcon("clock")} Schedule</button></div>
        <div class="citation-row">Practice links: ${sourceCitation("ArtPrompts", "https://artprompts.org/")} ${sourceCitation("Line of Action", "https://line-of-action.com/")}</div>
      </article>
      <article class="practice-sites card">
        <div class="section-heading compact"><div><p class="card-kicker">Open a practice tool</p><h2>Fresh references</h2></div><span class="source-icon" data-icon="globe"></span></div>
        <a href="https://line-of-action.com/" target="_blank" rel="noopener noreferrer"><span class="site-mark">LA</span><span><strong>Line of Action</strong><small>Timed figure, animal, hand, face, still-life, and environment photos</small></span>${svgIcon("arrow-up-right")}</a>
        <a href="https://bodiesinmotion.photo/" target="_blank" rel="noopener noreferrer"><span class="site-mark">BM</span><span><strong>Bodies in Motion</strong><small>Pose search, timed studies, and the daily QuickDraw challenge</small></span>${svgIcon("arrow-up-right")}</a>
        <a href="https://artprompts.org/" target="_blank" rel="noopener noreferrer"><span class="site-mark">AP</span><span><strong>ArtPrompts</strong><small>Randomized ideas for drawing and digital art practice</small></span>${svgIcon("arrow-up-right")}</a>
      </article>
    </div>` : "";

  const projectSection = hobbyModuleEnabled("project") ? `
    <article class="studio-project-card card">
      <div><span class="studio-project-icon art-icon">${svgIcon("layers")}</span><p class="card-kicker">On your easel</p><h2>Current piece notes</h2><p>Keep the next decision visible so it is easier to return.</p></div>
      <div class="project-note-area"><textarea data-hobby-note="art" rows="4" placeholder="Palette, materials, next mark, questions…">${escapeHTML(state.hobbyNotes.art)}</textarea><div><span>Saved locally</span><button class="text-button" data-hobby-note-plan="art" type="button">Plan a studio session ${svgIcon("arrow-right")}</button></div></div>
    </article>` : "";

  return `<div class="studio-banner art-banner"><div><span class="studio-label">Art · Painting · Drawing</span><h2>Look closely. Make freely.</h2><p>Reference photography, daily prompts, and just enough structure to help you begin.</p></div><div class="studio-banner-actions"><button class="secondary-button" type="button" data-pinterest-studio>${svgIcon("pinterest")} Import a board</button><button class="primary-button" type="button" data-open-inspiration>${svgIcon("plus")} Add a reference</button></div></div>${promptSection}${referenceSection}${projectSection}`;
}

function renderWritingStudio() {
  const moduleForCategory = { daily: "prompts", projects: "projects", journal: "journal" };
  const prompts = writingPrompts.filter((prompt) => prompt.category === writingFilter && hobbyModuleEnabled(moduleForCategory[prompt.category]));
  const safety = writingFilter === "journal" ? `<div class="care-note"><span>${svgIcon("heart")}</span><p><strong>A gentle boundary</strong> These reflective prompts are educational, not therapy or medical care. Choose only what feels manageable, stop if writing becomes overwhelming, and reach out to a qualified professional when support would help.</p></div>` : "";
  return `<div class="studio-banner writing-banner"><div><span class="studio-label">Writing · Projects · Journaling</span><h2>Find the next true sentence.</h2><p>Choose a quick spark, move a longer project forward, or make private room for reflection.</p></div><div class="studio-banner-actions"><button class="secondary-button" type="button" data-view-link="notes">${svgIcon("notebook")} Open notebook</button><button class="primary-button" type="button" data-new-writing-note>${svgIcon("plus")} Blank page</button></div></div>
    <div class="writing-filter-bar card">
      <div class="writing-filters" role="tablist" aria-label="Filter writing prompts">
        <button class="${writingFilter === "daily" ? "is-active" : ""}" data-writing-filter="daily" type="button">${svgIcon("sun")} Daily writing</button>
        <button class="${writingFilter === "projects" ? "is-active" : ""}" data-writing-filter="projects" type="button">${svgIcon("folder")} Existing projects</button>
        <button class="${writingFilter === "journal" ? "is-active" : ""}" data-writing-filter="journal" type="button">${svgIcon("heart")} Journaling</button>
      </div>
      <span>${prompts.length} prompts</span>
    </div>
    ${safety}
    ${prompts.length ? `<section class="writing-prompt-grid">${prompts.map((prompt) => `<article class="writing-prompt-card card">
      <div class="writing-prompt-top"><span class="prompt-category">${escapeHTML(prompt.label)}</span><span class="prompt-time">${svgIcon("clock")} ${escapeHTML(prompt.time)}</span></div>
      <blockquote>${escapeHTML(prompt.prompt)}</blockquote>
      ${sourceCitation(prompt.source, prompt.sourceUrl)}
      <div class="prompt-card-actions"><button type="button" data-writing-note="${prompt.id}">${svgIcon("pen-line")} Write now</button><button type="button" data-writing-plan="${prompt.id}">${svgIcon("calendar")} Schedule</button></div>
    </article>`).join("")}</section>` : `<div class="empty-state"><strong>This module is hidden</strong>Use “Customize studio” to turn it back on.</div>`}
    <div class="sources-disclosure card"><span>${svgIcon("quote")}</span><div><strong>How sources are used</strong><p>Prompts are original Daylily wording, informed by the linked prompt libraries or adapted from the cited well-being practices. Source links stay attached when you send a prompt to Notes.</p></div>${sourceCitation("View VA guidance", "https://www.va.gov/WHOLEHEALTHLIBRARY/docs/therapeutic-journaling.pdf")}${sourceCitation("View Berkeley practice", "https://ggia.berkeley.edu/practice/expressive_writing%C2%A0")}</div>`;
}

function ravelrySearchURL(term) {
  return `https://www.ravelry.com/patterns/search#craft=crochet&availability=free&query=${encodeURIComponent(term)}&sort=best&view=captioned_thumbs`;
}

function patternPreviewURL(pattern) {
  const suppliedImage = safeURL(pattern.image);
  if (suppliedImage) return suppliedImage;
  const sourceURL = safeURL(pattern.url);
  return sourceURL ? `https://s0.wp.com/mshots/v1/${encodeURIComponent(sourceURL)}?w=720&h=450` : "";
}

async function searchAllPatternSites(term) {
  crochetQuery = term.trim();
  crochetCategory = "all";
  crochetSearchStatus = PATTERN_SEARCH_ENDPOINT ? "loading" : "curated";
  renderHobbyStudio();
  if (!PATTERN_SEARCH_ENDPOINT) {
    toast("Showing matches from the combined starter index");
    return;
  }
  try {
    const response = await fetch(`${PATTERN_SEARCH_ENDPOINT}?q=${encodeURIComponent(crochetQuery)}&free=true`, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Pattern search service unavailable");
    const payload = await response.json();
    const items = Array.isArray(payload) ? payload : payload.results;
    liveCrochetResults = (Array.isArray(items) ? items : []).slice(0, 60).map((item, index) => ({
      id: `live-${index}-${String(item.source || "pattern").toLowerCase()}`,
      title: String(item.title || "Untitled pattern").slice(0, 180),
      source: crochetSources.some((source) => source.name === item.source) ? item.source : "Independent source",
      designer: String(item.designer || "Independent designer").slice(0, 120),
      categories: Array.isArray(item.categories) ? item.categories.map(String).slice(0, 6) : [],
      difficulty: String(item.difficulty || "Unrated").slice(0, 40),
      url: safeURL(item.url),
      image: safeURL(item.image),
      description: String(item.description || "Free crochet pattern from the original website.").slice(0, 320),
    })).filter((item) => item.url);
    crochetSearchStatus = "live";
    renderHobbyStudio();
    toast(`Added ${liveCrochetResults.length} live pattern results`);
  } catch {
    crochetSearchStatus = "curated";
    renderHobbyStudio();
    toast("Live search is unavailable; showing the curated index instead");
  }
}

function renderCrochetStudio() {
  const allPatterns = [...crochetPatternIndex, ...liveCrochetResults.filter((live) => !crochetPatternIndex.some((item) => item.url === live.url))];
  const query = crochetQuery.trim().toLowerCase();
  const matchingPatterns = allPatterns.filter((pattern) => {
    const categoryMatch = crochetCategory === "all" || pattern.categories.includes(crochetCategory);
    const queryMatch = !query || `${pattern.title} ${pattern.designer} ${pattern.source} ${pattern.description} ${pattern.categories.join(" ")}`.toLowerCase().includes(query);
    return categoryMatch && queryMatch;
  });
  const patterns = matchingPatterns.filter((pattern) => crochetSourceFilter === "all" || pattern.source === crochetSourceFilter);
  const sourceCounts = Object.fromEntries(crochetSources.map((source) => [source.name, matchingPatterns.filter((pattern) => pattern.source === source.name).length]));
  const searchLabel = crochetQuery ? `Results for “${escapeHTML(crochetQuery)}”` : crochetCategory === "all" ? "All free patterns" : `Free ${escapeHTML(crochetCategory)} patterns`;
  const searchSection = hobbyModuleEnabled("search") ? `<section class="crochet-search-card card">
    <div><p class="card-kicker">One search · four pattern libraries</p><h2>What would you like to make?</h2><p>Search the combined Daylily index from Ravelry, Yarnspirations, LoveCrafts, and AllFreeCrochet. Every result opens its original source.</p></div>
    <form id="crochet-search-form" class="crochet-search-form"><label><span data-icon="search"></span><input id="crochet-search-input" value="${escapeHTML(crochetQuery)}" aria-label="Search all free crochet pattern websites" placeholder="Try ‘oversized cardigan’ or ‘tiny whale’" /></label><button class="primary-button" type="submit">Search all sites ${svgIcon("search")}</button></form>
    <div class="crochet-categories"><button class="${crochetCategory === "all" ? "is-active" : ""}" data-crochet-category="all" type="button">all</button>${crochetCategories.map((category) => `<button class="${category === crochetCategory ? "is-active" : ""}" data-crochet-category="${category}" type="button">${escapeHTML(category)}</button>`).join("")}</div>
  </section>` : "";
  const sourcesSection = hobbyModuleEnabled("sources") ? `<section class="studio-section">
    <div class="section-heading pattern-results-heading"><div><p class="card-kicker">Combined results</p><h2>${searchLabel}</h2></div><span class="results-note">${patterns.length} results · ${crochetSearchStatus === "live" ? "Live index" : crochetSearchStatus === "loading" ? "Checking live sources…" : "Curated starter index"}</span></div>
    <div class="source-filter-row" role="group" aria-label="Filter patterns by website"><button class="${crochetSourceFilter === "all" ? "is-active" : ""}" data-crochet-source="all" type="button">All websites <span>${matchingPatterns.length}</span></button>${crochetSources.map((source) => `<button class="${crochetSourceFilter === source.name ? "is-active" : ""}" data-crochet-source="${escapeHTML(source.name)}" type="button">${escapeHTML(source.name)} <span>${sourceCounts[source.name]}</span></button>`).join("")}</div>
    ${patterns.length ? `<div class="unified-pattern-grid">${patterns.map((pattern) => `<article class="pattern-result-card card">
      <a class="pattern-preview" href="${escapeHTML(pattern.url)}" target="_blank" rel="noopener noreferrer" aria-label="Preview ${escapeHTML(pattern.title)} on ${escapeHTML(pattern.source)}"><img data-pattern-preview src="${escapeHTML(patternPreviewURL(pattern))}" alt="Website preview for ${escapeHTML(pattern.title)}" loading="lazy" /><span>${svgIcon("external")} Website preview</span></a>
      <div class="pattern-result-source"><span class="source-dot ${escapeHTML(pattern.source.toLowerCase().replaceAll(/[^a-z]/g, ""))}"></span><a href="${escapeHTML(pattern.url)}" target="_blank" rel="noopener noreferrer" aria-label="Cited source: ${escapeHTML(pattern.source)} original pattern page">${escapeHTML(pattern.source)}</a><span class="free-pill">Free</span></div>
      <h3>${escapeHTML(pattern.title)}</h3><p class="pattern-designer">by ${escapeHTML(pattern.designer || "Independent designer")}</p><p>${escapeHTML(pattern.description || "Free crochet pattern from the original source website.")}</p>
      <div class="tag-row">${(pattern.categories || []).slice(0, 3).map((category) => `<span class="tag">${escapeHTML(category)}</span>`).join("")}<span class="tag">${escapeHTML(pattern.difficulty || "Unrated")}</span></div>
      <div class="pattern-result-actions"><button type="button" data-save-pattern="${escapeHTML(pattern.id)}">${svgIcon("bookmark")} Save</button><a href="${escapeHTML(pattern.url)}" target="_blank" rel="noopener noreferrer">Open pattern ${svgIcon("arrow-up-right")}</a></div>
    </article>`).join("")}</div>` : `<div class="empty-state"><strong>No indexed matches yet</strong>Try a broader phrase, choose “All,” or use the live source links below.</div>`}
    <div class="live-source-search card"><div><span class="pattern-action-art">${svgIcon("globe")}</span><span><strong>Continue on every original website</strong><small>These links run the current phrase on each source while the optional live-search backend is not connected.</small></span></div><div class="live-source-links">${crochetSources.map((source) => {
      const term = crochetQuery || (crochetCategory === "all" ? "free crochet" : `${crochetCategory} crochet`);
      const target = source.name === "Ravelry" ? ravelrySearchURL(term) : source.name === "Yarnspirations" ? `https://www.yarnspirations.com/search?q=${encodeURIComponent(term)}` : source.name === "LoveCrafts" ? `https://www.lovecrafts.com/en-us/search?q=${encodeURIComponent(term)}` : `https://www.allfreecrochet.com/index.php?action=search&search=${encodeURIComponent(term)}`;
      return `<a href="${escapeHTML(target)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.name)} ${svgIcon("arrow-up-right")}</a>`;
    }).join("")}</div></div>
  </section>` : "";
  const queueSection = hobbyModuleEnabled("queue") ? `<article class="studio-project-card crochet-project-card card"><div><span class="studio-project-icon crochet-icon">${svgIcon("yarn")}</span><p class="card-kicker">Project basket</p><h2>Your next make</h2><p>Paste a pattern name, yarn idea, sizing note, or the next step.</p></div><div class="project-note-area"><textarea data-hobby-note="crochet" rows="4" placeholder="Pattern, yarn, hook, size, modifications…">${escapeHTML(state.hobbyNotes.crochet)}</textarea><div><span>Saved locally</span><button class="text-button" data-hobby-note-plan="crochet" type="button">Plan stitching time ${svgIcon("arrow-right")}</button></div></div></article>` : "";
  return `<div class="studio-banner crochet-banner"><div><span class="studio-label">Crochet · Patterns · Projects</span><h2>Find a pattern. Follow the thread.</h2><p>One calm search across four free-pattern libraries, with source filters and direct links.</p></div><div class="studio-banner-actions"><button class="secondary-button" type="button" data-pinterest-studio>${svgIcon("pinterest")} Import crochet board</button><button class="primary-button" type="button" data-save-crochet-search>${svgIcon("bookmark")} Save this search</button></div></div>${searchSection}${sourcesSection}${queueSection}`;
}

function renderHobbyStudio() {
  const content = document.querySelector("#hobby-content");
  if (!content) return;
  renderHobbyTabs();
  content.innerHTML = state.activeHobby === "writing" ? renderWritingStudio() : state.activeHobby === "crochet" ? renderCrochetStudio() : renderArtStudio();
  hydrateIcons(content);
  content.querySelectorAll("[data-pattern-preview]").forEach((image) => image.addEventListener("error", () => {
    image.closest(".pattern-preview")?.classList.add("is-unavailable");
    image.remove();
  }, { once: true }));
}

function openHobbySettings() {
  const hobbyNames = { art: "art studio", writing: "writing room", crochet: "crochet corner" };
  document.querySelector("#hobby-settings-title").textContent = `Customize ${hobbyNames[state.activeHobby]}`;
  document.querySelector("#hobby-home-toggle").checked = state.hobbyHome;
  document.querySelector("#hobby-settings-options").innerHTML = hobbyModuleMeta[state.activeHobby].map((module) => `<label class="module-option"><span class="module-option-icon">${svgIcon("layers")}</span><span><strong>${escapeHTML(module.title)}</strong><small>${escapeHTML(module.description)}</small></span><input type="checkbox" name="module" value="${module.key}" ${hobbyModuleEnabled(module.key) ? "checked" : ""} /><i></i></label>`).join("");
  openDialog("#hobby-settings-modal");
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.dataset.cozy = String(state.cozy);
  const root = document.documentElement.style;
  ["--accent", "--accent-dark", "--accent-soft"].forEach((property) => root.removeProperty(property));
  if (state.customAccent) {
    root.setProperty("--accent", state.customAccent);
    root.setProperty("--accent-dark", mixHex(state.customAccent, "#000000", 0.24));
    root.setProperty("--accent-soft", mixHex(state.customAccent, "#ffffff", state.theme === "nightfall" ? 0.7 : 0.76));
  }
  document.querySelectorAll("[data-theme-option]").forEach((option) => option.classList.toggle("is-active", option.dataset.themeOption === state.theme));
  document.querySelector("#cozy-density").checked = state.cozy;
  document.querySelector("#custom-accent").value = state.customAccent || ({ linen: "#d77b5b", coastal: "#4d8e96", matcha: "#80945f", lilac: "#9d6fa0", terracotta: "#c86440", nightfall: "#e5926e" }[state.theme]);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue("--bg").trim());
}

function mixHex(colorA, colorB, weight) {
  const hex = (color) => color.replace("#", "");
  const a = hex(colorA);
  const b = hex(colorB);
  const parts = [0, 2, 4].map((offset) => Math.round(parseInt(a.slice(offset, offset + 2), 16) * (1 - weight) + parseInt(b.slice(offset, offset + 2), 16) * weight));
  return `#${parts.map((part) => part.toString(16).padStart(2, "0")).join("")}`;
}

function validAdminOrder(order) {
  const known = Object.keys(adminPageMeta);
  const requested = Array.isArray(order) ? order.filter((key, index) => known.includes(key) && order.indexOf(key) === index) : [];
  return [...requested, ...known.filter((key) => !requested.includes(key))];
}

function applyAdminConfig() {
  const config = state.adminConfig;
  config.order = validAdminOrder(config.order);
  config.hiddenViews = Array.isArray(config.hiddenViews) ? config.hiddenViews.filter((key) => key in adminPageMeta) : [];
  document.querySelector("#site-brand-name").textContent = config.brandName || defaultAdminConfig.brandName;
  document.title = `${config.brandName || defaultAdminConfig.brandName} · Creative planning`;

  Object.keys(adminPageMeta).forEach((key) => {
    const copy = config.copy[key];
    const eyebrow = document.querySelector(`#copy-${key}-eyebrow`);
    const lead = document.querySelector(`#copy-${key}-lead`);
    const accent = document.querySelector(`#copy-${key}-accent`);
    const intro = document.querySelector(`#copy-${key}-intro`);
    if (eyebrow) eyebrow.textContent = copy.eyebrow;
    if (lead) lead.textContent = copy.lead;
    if (accent) accent.textContent = copy.accent;
    if (intro) intro.textContent = copy.intro;
    document.querySelectorAll(`[data-nav-label="${key}"]`).forEach((label) => { label.textContent = config.navLabels[key] || adminPageMeta[key].label; });
    document.querySelectorAll(`[data-view="${key}"]`).forEach((button) => { button.hidden = config.hiddenViews.includes(key); });
  });

  const nav = document.querySelector(".primary-nav");
  config.order.forEach((key) => {
    const button = nav.querySelector(`.nav-item[data-view="${key}"]`);
    if (button) nav.append(button);
  });

  document.documentElement.dataset.fontStyle = config.appearance.fontStyle;
  document.documentElement.dataset.cornerStyle = config.appearance.cornerStyle;
  document.documentElement.dataset.cardStyle = config.appearance.cardStyle;
  document.documentElement.dataset.contentWidth = config.appearance.contentWidth;
  document.documentElement.dataset.highContrast = String(config.appearance.highContrast);
  document.documentElement.dataset.motion = String(config.appearance.motion);
}

function adminCopyGroup(key) {
  const page = adminPageMeta[key];
  const copy = state.adminConfig.copy[key];
  return `<details class="admin-copy-group" ${key === "today" ? "open" : ""}><summary><span class="admin-page-icon">${svgIcon(page.icon)}</span><span><strong>${escapeHTML(state.adminConfig.navLabels[key])}</strong><small>${escapeHTML(copy.lead)} ${escapeHTML(copy.accent)}</small></span>${svgIcon("chevron-right")}</summary><div class="admin-copy-fields">
    <label class="admin-field"><span>Navigation label</span><input data-admin-nav-label="${key}" maxlength="24" value="${escapeHTML(state.adminConfig.navLabels[key])}" /></label>
    ${key === "today" ? "" : `<label class="admin-field"><span>Eyebrow</span><input data-admin-copy="${key}.eyebrow" maxlength="60" value="${escapeHTML(copy.eyebrow)}" /></label>`}
    <label class="admin-field"><span>Headline</span><input data-admin-copy="${key}.lead" maxlength="70" value="${escapeHTML(copy.lead)}" /></label>
    <label class="admin-field"><span>Highlighted words</span><input data-admin-copy="${key}.accent" maxlength="45" value="${escapeHTML(copy.accent)}" /></label>
    <label class="admin-field full"><span>Supporting introduction</span><textarea data-admin-copy="${key}.intro" rows="2" maxlength="220">${escapeHTML(copy.intro)}</textarea></label>
    <button class="text-button" data-preview-view="${key}" type="button">Preview this page ${svgIcon("arrow-right")}</button>
  </div></details>`;
}

function renderAdminEditor() {
  const config = state.adminConfig;
  document.querySelector('#admin-copy-form [name="brandName"]').value = config.brandName;
  document.querySelector("#admin-copy-groups").innerHTML = config.order.map(adminCopyGroup).join("");
  document.querySelector("#admin-home-view").innerHTML = config.order.filter((key) => !config.hiddenViews.includes(key)).map((key) => `<option value="${key}" ${key === config.homeView ? "selected" : ""}>${escapeHTML(config.navLabels[key])}</option>`).join("");
  document.querySelector("#admin-view-list").innerHTML = config.order.map((key, index) => `<article class="admin-view-row ${config.hiddenViews.includes(key) ? "is-hidden" : ""}"><span class="admin-page-icon">${svgIcon(adminPageMeta[key].icon)}</span><span><strong>${escapeHTML(config.navLabels[key])}</strong><small>${key === config.homeView ? "Starting page" : `/${key}`}</small></span><label class="admin-visibility"><input type="checkbox" data-admin-view-visible="${key}" ${config.hiddenViews.includes(key) ? "" : "checked"} /><i></i><span>${config.hiddenViews.includes(key) ? "Hidden" : "Visible"}</span></label><div class="admin-reorder"><button type="button" data-admin-move="${key}" data-direction="up" aria-label="Move ${escapeHTML(config.navLabels[key])} up" ${index === 0 ? "disabled" : ""}>${svgIcon("arrow-right")}</button><button type="button" data-admin-move="${key}" data-direction="down" aria-label="Move ${escapeHTML(config.navLabels[key])} down" ${index === config.order.length - 1 ? "disabled" : ""}>${svgIcon("arrow-right")}</button></div></article>`).join("");
  document.querySelector("#admin-font-style").value = config.appearance.fontStyle;
  document.querySelector("#admin-corner-style").value = config.appearance.cornerStyle;
  document.querySelector("#admin-card-style").value = config.appearance.cardStyle;
  document.querySelector("#admin-content-width").value = config.appearance.contentWidth;
  document.querySelector("#admin-high-contrast").checked = config.appearance.highContrast;
  document.querySelector("#admin-motion").checked = config.appearance.motion;
  document.querySelector("#admin-cozy").checked = state.cozy;
  hydrateIcons(document.querySelector("#view-admin"));
}

function saveAdminChange(message = "Configuration saved locally") {
  applyAdminConfig();
  persist();
  const status = document.querySelector("#admin-change-status");
  if (status) status.textContent = message;
}

function sanitizeImportedAdminConfig(input) {
  if (!input || typeof input !== "object") throw new Error("Invalid configuration file");
  const clean = structuredClone(defaultAdminConfig);
  clean.brandName = String(input.brandName || clean.brandName).slice(0, 32);
  clean.order = validAdminOrder(input.order);
  clean.hiddenViews = Array.isArray(input.hiddenViews) ? input.hiddenViews.filter((key) => key in adminPageMeta) : [];
  clean.homeView = clean.order.includes(input.homeView) && !clean.hiddenViews.includes(input.homeView) ? input.homeView : clean.order.find((key) => !clean.hiddenViews.includes(key)) || "today";
  Object.keys(adminPageMeta).forEach((key) => {
    clean.navLabels[key] = String(input.navLabels?.[key] || clean.navLabels[key]).slice(0, 24);
    Object.keys(clean.copy[key]).forEach((field) => { clean.copy[key][field] = String(input.copy?.[key]?.[field] ?? clean.copy[key][field]).slice(0, field === "intro" ? 220 : 70); });
  });
  const allowed = { fontStyle: ["editorial", "modern", "classic"], cornerStyle: ["soft", "moderate", "square"], cardStyle: ["elevated", "outlined", "flat"], contentWidth: ["focused", "wide", "full"] };
  Object.entries(allowed).forEach(([field, values]) => { if (values.includes(input.appearance?.[field])) clean.appearance[field] = input.appearance[field]; });
  clean.appearance.highContrast = input.appearance?.highContrast !== false;
  clean.appearance.motion = input.appearance?.motion !== false;
  clean.elementStyles = {};
  Object.entries(input.elementStyles && typeof input.elementStyles === "object" ? input.elementStyles : {}).slice(0, 300).forEach(([key, value]) => {
    if (typeof key !== "string" || key.length > 240 || !value || typeof value !== "object") return;
    const item = {};
    ["background", "color", "borderColor"].forEach((field) => { if (/^#[0-9a-f]{6}$/i.test(value[field] || "")) item[field] = value[field]; });
    if (["left", "center", "right"].includes(value.textAlign)) item.textAlign = value.textAlign;
    if (["50%", "66%", "75%", "100%"].includes(value.width)) item.width = value.width;
    ["offsetX", "offsetY"].forEach((field) => { if (Number.isFinite(Number(value[field]))) item[field] = Math.max(-240, Math.min(240, Number(value[field]))); });
    if (Number.isFinite(Number(value.padding))) item.padding = Math.max(0, Math.min(100, Number(value.padding)));
    if (Number.isFinite(Number(value.radius))) item.radius = Math.max(0, Math.min(80, Number(value.radius)));
    if (typeof value.text === "string") item.text = value.text.slice(0, 500);
    if (Object.keys(item).length) clean.elementStyles[key] = item;
  });
  return clean;
}

const visualEditableSelector = [
  '[data-view-panel]:not([data-view-panel="admin"]) .page-intro',
  '[data-view-panel]:not([data-view-panel="admin"]) .card',
  '[data-view-panel]:not([data-view-panel="admin"]) .studio-banner',
  '[data-view-panel]:not([data-view-panel="admin"]) .hobby-switcher',
  '[data-view-panel]:not([data-view-panel="admin"]) .library-toolbar',
  '[data-view-panel]:not([data-view-panel="admin"]) article',
  '[data-view-panel]:not([data-view-panel="admin"]) .schedule-event',
  '[data-view-panel]:not([data-view-panel="admin"]) .planner-event',
  '[data-view-panel]:not([data-view-panel="admin"]) h1',
  '[data-view-panel]:not([data-view-panel="admin"]) h2',
  '[data-view-panel]:not([data-view-panel="admin"]) h3',
  '[data-view-panel]:not([data-view-panel="admin"]) p',
  '[data-view-panel]:not([data-view-panel="admin"]) blockquote',
].join(",");

function visualElementKey(element) {
  if (element.id) return `id:${element.id}`;
  const panel = element.closest("[data-view-panel]");
  if (!panel) return "";
  const parts = [];
  let current = element;
  while (current && current !== panel) {
    const siblings = [...current.parentElement.children];
    parts.unshift(`${current.tagName.toLowerCase()}:${siblings.indexOf(current)}`);
    current = current.parentElement;
  }
  return `${panel.dataset.viewPanel}/${parts.join("/")}`;
}

function visualCandidates() {
  return [...document.querySelectorAll(visualEditableSelector)];
}

function tagVisualElements() {
  document.querySelectorAll("[data-editor-key]").forEach((element) => element.removeAttribute("data-editor-key"));
  visualCandidates().forEach((element) => {
    const key = visualElementKey(element);
    if (key) {
      element.dataset.editorKey = key;
      if (canEditElementText(element) && !element.hasAttribute("data-editor-original-text")) element.dataset.editorOriginalText = element.textContent;
    }
  });
}

function resetManagedElementStyles(element) {
  ["background", "border-color", "text-align", "transform", "width", "padding", "border-radius", "--text", "--muted"].forEach((property) => element.style.removeProperty(property));
}

function applyElementOverride(element, override = {}) {
  resetManagedElementStyles(element);
  if (override.background) element.style.setProperty("background", override.background);
  if (override.color) {
    element.style.setProperty("--text", override.color);
    element.style.setProperty("--muted", `color-mix(in srgb, ${override.color} 72%, transparent)`);
    element.style.setProperty("color", override.color);
  } else {
    element.style.removeProperty("color");
  }
  if (override.borderColor) element.style.setProperty("border-color", override.borderColor);
  if (override.textAlign) element.style.setProperty("text-align", override.textAlign);
  const x = Number(override.offsetX) || 0;
  const y = Number(override.offsetY) || 0;
  if (x || y) element.style.setProperty("transform", `translate(${x}px, ${y}px)`);
  if (override.width) element.style.setProperty("width", override.width);
  if (Number.isFinite(Number(override.padding))) element.style.setProperty("padding", `${Number(override.padding)}px`);
  if (Number.isFinite(Number(override.radius))) element.style.setProperty("border-radius", `${Number(override.radius)}px`);
  if (canEditElementText(element)) {
    const desiredText = typeof override.text === "string" ? override.text : element.dataset.editorOriginalText;
    if (typeof desiredText === "string" && element.textContent !== desiredText) element.textContent = desiredText;
  }
}

function applyVisualOverrides() {
  tagVisualElements();
  document.querySelectorAll(".is-editor-selected").forEach((element) => element.classList.remove("is-editor-selected"));
  document.querySelectorAll("[data-editor-key]").forEach((element) => applyElementOverride(element, state.adminConfig.elementStyles[element.dataset.editorKey]));
  if (selectedEditorKey) {
    const selected = document.querySelector(`[data-editor-key="${CSS.escape(selectedEditorKey)}"]`);
    if (selected?.closest("[data-view-panel]")?.classList.contains("is-active")) selected.classList.add("is-editor-selected");
    else if (visualEditorActive) {
      selectedEditorKey = "";
      document.querySelector("#visual-inspector-form").hidden = true;
      document.querySelector("#visual-editor-empty").hidden = false;
    }
  }
}

function rgbToHex(value, fallback = "#ffffff") {
  const values = String(value).match(/[\d.]+/g)?.slice(0, 3).map(Number);
  if (!values || values.length < 3) return fallback;
  return `#${values.map((part) => Math.max(0, Math.min(255, Math.round(part))).toString(16).padStart(2, "0")).join("")}`;
}

function selectedVisualElement() {
  const selected = selectedEditorKey ? document.querySelector(`[data-editor-key="${CSS.escape(selectedEditorKey)}"]`) : null;
  return selected?.closest("[data-view-panel]")?.classList.contains("is-active") ? selected : null;
}

function canEditElementText(element) {
  return element && element.children.length === 0 && !["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(element.tagName);
}

function populateVisualInspector(element) {
  const override = state.adminConfig.elementStyles[selectedEditorKey] || {};
  const computed = getComputedStyle(element);
  const textField = document.querySelector("#visual-text-field");
  textField.hidden = !canEditElementText(element);
  document.querySelector("#visual-text-content").value = canEditElementText(element) ? (override.text ?? element.textContent.trim()) : "";
  document.querySelector("#visual-text-align").value = override.textAlign || "";
  document.querySelector("#visual-width").value = override.width || "";
  document.querySelector("#visual-offset-x").value = Number(override.offsetX) || 0;
  document.querySelector("#visual-offset-y").value = Number(override.offsetY) || 0;
  document.querySelector("#visual-padding").value = Number.isFinite(Number(override.padding)) ? override.padding : "";
  document.querySelector("#visual-radius").value = Number.isFinite(Number(override.radius)) ? override.radius : "";
  document.querySelector("#visual-background").value = override.background || rgbToHex(computed.backgroundColor);
  document.querySelector("#visual-text-color").value = override.color || rgbToHex(computed.color, "#282a25");
  document.querySelector("#visual-border-color").value = override.borderColor || rgbToHex(computed.borderColor, "#d8d4cb");
  const friendly = element.id ? `#${element.id}` : element.classList.length ? `.${[...element.classList].filter((name) => !name.startsWith("is-editor")).slice(0, 2).join(".")}` : element.tagName.toLowerCase();
  document.querySelector("#selected-element-name").textContent = element.matches("h1,h2,h3,p,blockquote") ? `${element.tagName.toLowerCase()} text` : "Container";
  document.querySelector("#selected-element-path").textContent = friendly;
  document.querySelector("#visual-editor-empty").hidden = true;
  document.querySelector("#visual-inspector-form").hidden = false;
}

function selectVisualElement(element) {
  document.querySelectorAll(".is-editor-selected").forEach((item) => item.classList.remove("is-editor-selected"));
  selectedEditorKey = element.dataset.editorKey;
  element.classList.add("is-editor-selected");
  populateVisualInspector(element);
  document.querySelector("#visual-inspector-form").scrollTop = 0;
  document.querySelector("#visual-editor-inspector").classList.add("is-open");
  document.querySelector("#visual-editor-inspector").setAttribute("aria-hidden", "false");
  document.querySelector("#visual-editor-inspector").removeAttribute("inert");
  document.querySelector("#visual-editor-badge").hidden = true;
}

function startVisualEditor() {
  visualEditorActive = true;
  selectedEditorKey = "";
  document.documentElement.dataset.visualEditor = "true";
  applyVisualOverrides();
  document.querySelector("#visual-editor-inspector").classList.add("is-open");
  document.querySelector("#visual-editor-inspector").setAttribute("aria-hidden", "false");
  document.querySelector("#visual-editor-inspector").removeAttribute("inert");
  document.querySelector("#visual-editor-empty").hidden = false;
  document.querySelector("#visual-inspector-form").hidden = true;
  document.querySelector("#visual-editor-badge").hidden = true;
  setView(state.adminConfig.homeView);
  toast("Visual editing is on — select a container or text element");
}

function stopVisualEditor() {
  visualEditorActive = false;
  selectedEditorKey = "";
  delete document.documentElement.dataset.visualEditor;
  document.querySelectorAll(".is-editor-selected, .is-editor-hover").forEach((item) => item.classList.remove("is-editor-selected", "is-editor-hover"));
  document.querySelector("#visual-editor-inspector").classList.remove("is-open");
  document.querySelector("#visual-editor-inspector").setAttribute("aria-hidden", "true");
  document.querySelector("#visual-editor-inspector").setAttribute("inert", "");
  document.querySelector("#visual-editor-badge").hidden = true;
}

function renderAll() {
  document.querySelector("#today-date").textContent = today.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  document.querySelector("#focus-input").value = state.focus;
  document.querySelector("#week-note-input").value = state.weekNote;
  document.querySelectorAll("[data-mood]").forEach((button) => button.classList.toggle("is-selected", button.dataset.mood === state.mood));
  renderTodaySchedule();
  renderWeekStrip();
  renderPlannerSchedule();
  renderTodayInspiration();
  renderInspirations();
  renderHobbyStudio();
  renderNotesList();
  renderNoteEditor();
  renderProfile();
  applyTheme();
  applyAdminConfig();
  renderAdminEditor();
  hydrateIcons();
  applyVisualOverrides();
}

function setView(view, updateHash = true) {
  const allowedViews = [...Object.keys(adminPageMeta), "admin"];
  let validView = allowedViews.includes(view) ? view : state.adminConfig.homeView;
  if (validView !== "admin" && state.adminConfig.hiddenViews.includes(validView)) validView = state.adminConfig.order.find((key) => !state.adminConfig.hiddenViews.includes(key)) || "admin";
  if (visualEditorActive && state.view && state.view !== validView) {
    selectedEditorKey = "";
    document.querySelectorAll(".is-editor-selected, .is-editor-hover").forEach((item) => item.classList.remove("is-editor-selected", "is-editor-hover"));
    document.querySelector("#visual-inspector-form").hidden = true;
    document.querySelector("#visual-editor-empty").hidden = false;
  }
  state.view = validView;
  document.querySelectorAll("[data-view-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.viewPanel === validView));
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("is-active", button.dataset.view === validView));
  document.querySelector("#sidebar").classList.remove("is-open");
  if (!document.querySelector("#theme-drawer").classList.contains("is-open")) document.querySelector("#drawer-scrim").classList.remove("is-open");
  if (updateHash) history.replaceState(null, "", `#${validView}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  persist();
  if (visualEditorActive || Object.keys(state.adminConfig.elementStyles).length) requestAnimationFrame(applyVisualOverrides);
}

function openDialog(id) {
  const dialog = document.querySelector(id);
  if (dialog && !dialog.open) dialog.showModal();
}

function openEventModal(preset = {}) {
  const form = document.querySelector("#event-form");
  form.reset();
  document.querySelector("#event-title").value = preset.title || "";
  document.querySelector("#event-date").value = preset.date || (state.view === "planner" ? state.selectedDate : todayISO);
  document.querySelector("#event-time").value = preset.time || "10:00";
  document.querySelector("#event-duration").value = String(preset.duration || 60);
  document.querySelector("#event-notes").value = preset.notes || "";
  openDialog("#event-modal");
  window.setTimeout(() => document.querySelector("#event-title").focus(), 30);
}

function toast(message) {
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  document.querySelector("#toast-region").append(element);
  window.setTimeout(() => {
    element.classList.add("is-leaving");
    window.setTimeout(() => element.remove(), 220);
  }, 2800);
}

function eventDates(event) {
  const start = new Date(`${event.date}T${event.time}:00`);
  const end = new Date(start.getTime() + Number(event.duration) * 60_000);
  return { start, end };
}

function calendarStamp(date, utc = false) {
  const target = utc ? new Date(date.toISOString()) : date;
  const year = utc ? target.getUTCFullYear() : target.getFullYear();
  const month = (utc ? target.getUTCMonth() : target.getMonth()) + 1;
  const day = utc ? target.getUTCDate() : target.getDate();
  const hour = utc ? target.getUTCHours() : target.getHours();
  const minute = utc ? target.getUTCMinutes() : target.getMinutes();
  const second = utc ? target.getUTCSeconds() : target.getSeconds();
  return `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}${String(minute).padStart(2, "0")}${String(second).padStart(2, "0")}${utc ? "Z" : ""}`;
}

function googleCalendarURL(event) {
  const { start, end } = eventDates(event);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${calendarStamp(start)}/${calendarStamp(end)}`,
    details: event.notes || "Planned with Daylily",
    ctz: timezone,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function openGoogleCalendar(event) {
  window.open(googleCalendarURL(event), "_blank", "noopener,noreferrer");
}

function icsEscape(value = "") {
  return String(value).replaceAll("\\", "\\\\").replaceAll(";", "\\;").replaceAll(",", "\\,").replaceAll("\n", "\\n");
}

function downloadICS(event) {
  const { start, end } = eventDates(event);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "PRODID:-//Daylily//Creative Planner//EN",
    "BEGIN:VEVENT",
    `UID:${event.id}@daylily.local`,
    `DTSTAMP:${calendarStamp(new Date(), true)}`,
    `DTSTART;TZID=${timezone}:${calendarStamp(start)}`,
    `DTEND;TZID=${timezone}:${calendarStamp(end)}`,
    `SUMMARY:${icsEscape(event.title)}`,
    `DESCRIPTION:${icsEscape(event.notes || "Planned with Daylily")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([calendar], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "daylily-moment"}.ics`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("Calendar file downloaded");
}

function deleteEvent(eventId) {
  const event = state.events.find((item) => item.id === eventId);
  if (!event) return;
  state.events = state.events.filter((item) => item.id !== eventId);
  persist();
  renderTodaySchedule();
  renderWeekStrip();
  renderPlannerSchedule();
  hydrateIcons();
  toast(`“${event.title}” removed`);
}

function handleGlobalSearch() {
  const query = document.querySelector("#global-search").value.trim().toLowerCase();
  if (!query) return;
  const note = state.notes.find((item) => `${item.title} ${item.body} ${item.tags.join(" ")}`.toLowerCase().includes(query));
  if (note) {
    state.activeNoteId = note.id;
    noteSearch = query;
    renderNotesList();
    renderNoteEditor();
    setView("notes");
    toast("Found a matching note");
    return;
  }
  const inspiration = state.inspirations.find((item) => `${item.title} ${item.note} ${item.tags.join(" ")}`.toLowerCase().includes(query));
  if (inspiration) {
    inspirationSearch = query;
    inspirationFilter = "all";
    renderInspirations();
    setView("inspiration");
    toast("Found a matching inspiration");
    return;
  }
  const event = state.events.find((item) => `${item.title} ${item.notes}`.toLowerCase().includes(query));
  if (event) {
    state.selectedDate = event.date;
    renderWeekStrip();
    renderPlannerSchedule();
    setView("planner");
    toast("Found a matching moment");
    return;
  }
  toast("No matches yet — try another phrase");
}

function createStudioNote({ title, body, tags = [] }) {
  const note = { id: crypto.randomUUID(), title, tags, body, updatedAt: Date.now() };
  state.notes.unshift(note);
  state.activeNoteId = note.id;
  persist();
  renderNotesList();
  renderNoteEditor();
  setView("notes");
  window.setTimeout(() => document.querySelector("#note-body").focus(), 80);
}

function scheduleStudioMoment(title, notes, duration = 30) {
  openEventModal({ title, notes, duration, date: todayISO, time: "18:00" });
}

function saveArtReference(reference) {
  const existing = state.inspirations.find((item) => item.sourceUrl === reference.sourceUrl);
  if (existing) {
    existing.saved = true;
    toast("That reference is already in your library");
  } else {
    state.inspirations.unshift({ id: crypto.randomUUID(), title: reference.title, category: "Ideas", tags: ["art reference", "photo study"], note: reference.prompt, image: reference.image, source: "Pexels", sourceUrl: reference.sourceUrl, ratio: "4 / 5", saved: true });
    toast("Photo reference saved to your library");
  }
  persist();
  renderInspirations();
  renderTodayInspiration();
}

function saveCrochetSearch() {
  const searchTerm = crochetQuery || (crochetCategory === "all" ? "free crochet patterns" : `${crochetCategory} crochet`);
  const title = crochetQuery ? `Crochet search · ${crochetQuery}` : crochetCategory === "all" ? "Free crochet pattern search" : `Free ${crochetCategory} crochet patterns`;
  const url = ravelrySearchURL(searchTerm);
  if (!state.inspirations.some((item) => item.sourceUrl === url)) {
    state.inspirations.unshift({ id: crypto.randomUUID(), title, category: "Ideas", tags: ["crochet", crochetCategory, "free pattern"], note: "A saved Ravelry search with crochet and free-pattern filters applied.", image: "", source: "Ravelry", sourceUrl: url, ratio: "4 / 5", saved: true });
    persist();
    renderInspirations();
    renderTodayInspiration();
  }
  toast(`${title} saved to your library`);
}

function saveCrochetPattern(pattern) {
  if (!pattern || !pattern.url) return;
  if (!state.inspirations.some((item) => item.sourceUrl === pattern.url)) {
    state.inspirations.unshift({ id: crypto.randomUUID(), title: pattern.title, category: "Ideas", tags: ["crochet", ...(pattern.categories || []).slice(0, 2), "free pattern"], note: `${pattern.description}\nDesigner: ${pattern.designer}`, image: patternPreviewURL(pattern), source: pattern.source, sourceUrl: pattern.url, ratio: "16 / 10", saved: true });
    persist();
    renderInspirations();
    renderTodayInspiration();
  }
  toast(`“${pattern.title}” saved to your library`);
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) setView(viewButton.dataset.view);

  const viewLink = event.target.closest("[data-view-link]");
  if (viewLink) setView(viewLink.dataset.viewLink);

  const hobbyButton = event.target.closest("[data-hobby]");
  if (hobbyButton) {
    state.activeHobby = hobbyButton.dataset.hobby;
    persist();
    renderHobbyStudio();
  }

  const writingFilterButton = event.target.closest("[data-writing-filter]");
  if (writingFilterButton) {
    writingFilter = writingFilterButton.dataset.writingFilter;
    renderHobbyStudio();
  }

  const crochetCategoryButton = event.target.closest("[data-crochet-category]");
  if (crochetCategoryButton) {
    crochetCategory = crochetCategoryButton.dataset.crochetCategory;
    renderHobbyStudio();
  }

  const crochetSourceButton = event.target.closest("[data-crochet-source]");
  if (crochetSourceButton) {
    crochetSourceFilter = crochetSourceButton.dataset.crochetSource;
    renderHobbyStudio();
  }

  if (event.target.closest("[data-open-event]")) openEventModal();
  if (event.target.closest("[data-open-inspiration]")) openDialog("#inspiration-modal");

  const referenceNote = event.target.closest("[data-reference-note]");
  if (referenceNote) {
    const reference = artReferences.find((item) => item.id === referenceNote.dataset.referenceNote);
    if (reference) createStudioNote({ title: `Study notes · ${reference.title}`, body: `${reference.prompt}\n\nReference: ${reference.sourceUrl}\n\nObservations:\n`, tags: ["art", "reference study"] });
  }

  const referenceReminder = event.target.closest("[data-reference-remind]");
  if (referenceReminder) {
    const reference = artReferences.find((item) => item.id === referenceReminder.dataset.referenceRemind);
    if (reference) scheduleStudioMoment(`Art study · ${reference.title}`, `${reference.prompt}\nReference: ${reference.sourceUrl}`, 45);
  }

  const referenceSave = event.target.closest("[data-reference-save]");
  if (referenceSave) {
    const reference = artReferences.find((item) => item.id === referenceSave.dataset.referenceSave);
    if (reference) saveArtReference(reference);
  }

  if (event.target.closest("[data-art-prompt-note]")) {
    const prompt = artDailyPrompts[Math.floor(Date.now() / 86_400_000) % artDailyPrompts.length];
    createStudioNote({ title: "Today’s art study", body: `${prompt}\n\nMaterials:\n\nWhat I noticed:\n`, tags: ["art", "daily prompt"] });
  }

  if (event.target.closest("[data-art-prompt-plan]")) {
    const prompt = artDailyPrompts[Math.floor(Date.now() / 86_400_000) % artDailyPrompts.length];
    scheduleStudioMoment("Daily art practice", prompt, 30);
  }

  const writingNoteButton = event.target.closest("[data-writing-note]");
  if (writingNoteButton) {
    const prompt = writingPrompts.find((item) => item.id === writingNoteButton.dataset.writingNote);
    if (prompt) createStudioNote({ title: `${prompt.label} · ${prompt.prompt.split(" ").slice(0, 5).join(" ")}…`, body: `${prompt.prompt}\n\nSource: ${prompt.source}\n${prompt.sourceUrl}\n\n`, tags: ["writing", prompt.category] });
  }

  const writingPlanButton = event.target.closest("[data-writing-plan]");
  if (writingPlanButton) {
    const prompt = writingPrompts.find((item) => item.id === writingPlanButton.dataset.writingPlan);
    if (prompt) scheduleStudioMoment(prompt.category === "journal" ? "Journaling time" : "Writing session", `${prompt.prompt}\nSource: ${prompt.sourceUrl}`, Number.parseInt(prompt.time, 10) || 20);
  }

  if (event.target.closest("[data-new-writing-note]")) createStudioNote({ title: "Untitled writing", body: "", tags: ["writing"] });
  if (event.target.closest("[data-save-crochet-search]")) saveCrochetSearch();
  const savePatternButton = event.target.closest("[data-save-pattern]");
  if (savePatternButton) {
    const pattern = [...crochetPatternIndex, ...liveCrochetResults].find((item) => item.id === savePatternButton.dataset.savePattern);
    saveCrochetPattern(pattern);
  }
  if (event.target.closest("[data-pinterest-studio]")) openDialog("#integrations-modal");

  const hobbyNotePlan = event.target.closest("[data-hobby-note-plan]");
  if (hobbyNotePlan) {
    const hobby = hobbyNotePlan.dataset.hobbyNotePlan;
    const title = hobby === "crochet" ? "Crochet project time" : "Art studio session";
    scheduleStudioMoment(title, state.hobbyNotes[hobby] || "Continue the current creative project.", hobby === "crochet" ? 60 : 45);
  }

  const closeButton = event.target.closest("[data-close-modal]");
  if (closeButton) closeButton.closest("dialog")?.close();

  const menuButton = event.target.closest("[data-event-menu]");
  if (menuButton) {
    const menu = menuButton.closest(".event-menu");
    document.querySelectorAll(".event-menu.is-open").forEach((item) => { if (item !== menu) item.classList.remove("is-open"); });
    menu.classList.toggle("is-open");
    event.stopPropagation();
  } else if (!event.target.closest(".event-actions-popover")) {
    document.querySelectorAll(".event-menu.is-open").forEach((item) => item.classList.remove("is-open"));
  }

  const eventAction = event.target.closest("[data-event-action]");
  if (eventAction) {
    const item = state.events.find((entry) => entry.id === eventAction.dataset.eventId);
    if (!item) return;
    if (eventAction.dataset.eventAction === "google") openGoogleCalendar(item);
    if (eventAction.dataset.eventAction === "apple") downloadICS(item);
    if (eventAction.dataset.eventAction === "delete") deleteEvent(item.id);
  }

  const dateButton = event.target.closest("[data-select-date]");
  if (dateButton) {
    state.selectedDate = dateButton.dataset.selectDate;
    persist();
    renderWeekStrip();
    renderPlannerSchedule();
    hydrateIcons();
  }

  const saveButton = event.target.closest("[data-toggle-save]");
  if (saveButton) {
    const item = state.inspirations.find((entry) => entry.id === saveButton.dataset.toggleSave);
    if (item) {
      item.saved = !item.saved;
      persist();
      renderInspirations();
      renderTodayInspiration();
      hydrateIcons();
      toast(item.saved ? "Saved to your little spark" : "Removed from saved sparks");
    }
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    inspirationFilter = filterButton.dataset.filter;
    inspirationSearch = "";
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("is-active", button === filterButton));
    renderInspirations();
    hydrateIcons();
  }

  const noteButton = event.target.closest("[data-note-id]");
  if (noteButton) {
    state.activeNoteId = noteButton.dataset.noteId;
    persist();
    renderNotesList();
    renderNoteEditor();
  }
});

document.querySelector("#event-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const newEvent = {
    id: crypto.randomUUID(),
    title: data.get("title").trim(),
    date: data.get("date"),
    time: data.get("time"),
    duration: Number(data.get("duration")),
    notes: data.get("notes").trim(),
    color: data.get("color"),
  };
  state.events.push(newEvent);
  state.selectedDate = newEvent.date;
  createdEventId = newEvent.id;
  persist();
  renderTodaySchedule();
  renderWeekStrip();
  renderPlannerSchedule();
  hydrateIcons();
  document.querySelector("#event-modal").close();
  document.querySelector("#created-event-title").textContent = newEvent.title;
  openDialog("#event-actions-modal");
});

document.querySelector("#inspiration-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const sourceUrl = safeURL(data.get("url"));
  state.inspirations.unshift({
    id: crypto.randomUUID(),
    title: data.get("title").trim(),
    category: data.get("category"),
    tags: data.get("tags").split(",").map((tag) => tag.trim()).filter(Boolean),
    note: data.get("note").trim(),
    image: safeURL(data.get("image")),
    source: /pinterest\.|pin\.it/i.test(sourceUrl) ? "Pinterest" : "Web",
    sourceUrl,
    ratio: "4 / 5",
    saved: true,
  });
  persist();
  inspirationFilter = "all";
  renderInspirations();
  renderTodayInspiration();
  hydrateIcons();
  event.currentTarget.reset();
  document.querySelector("#inspiration-modal").close();
  toast("Inspiration added to your garden");
});

document.querySelector("#account-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.profile = { name: data.get("name").trim(), email: data.get("email").trim() };
  persist();
  renderProfile();
  document.querySelector("#account-modal").close();
  toast("Local profile updated");
});

document.querySelector("#customize-hobby").addEventListener("click", openHobbySettings);

document.querySelector("#hobby-settings-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const enabled = new Set(new FormData(event.currentTarget).getAll("module"));
  hobbyModuleMeta[state.activeHobby].forEach((module) => {
    state.hobbyModules[state.activeHobby][module.key] = enabled.has(module.key);
  });
  state.hobbyHome = document.querySelector("#hobby-home-toggle").checked;
  persist();
  renderHobbyStudio();
  document.querySelector("#hobby-settings-modal").close();
  toast("Studio preferences saved");
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "crochet-search-form") return;
  event.preventDefault();
  const term = document.querySelector("#crochet-search-input").value.trim() || `${crochetCategory} crochet`;
  searchAllPatternSites(term);
});

document.addEventListener("input", (event) => {
  const hobbyNote = event.target.closest("[data-hobby-note]");
  if (!hobbyNote) return;
  state.hobbyNotes[hobbyNote.dataset.hobbyNote] = hobbyNote.value;
  debouncePersist();
});

document.querySelector("#focus-input").addEventListener("input", (event) => {
  state.focus = event.target.value;
  debouncePersist();
});

document.querySelector("#edit-focus").addEventListener("click", () => document.querySelector("#focus-input").focus());

document.querySelector("#week-note-input").addEventListener("input", (event) => {
  state.weekNote = event.target.value;
  debouncePersist();
});

document.querySelectorAll("[data-mood]").forEach((button) => button.addEventListener("click", () => {
  state.mood = button.dataset.mood;
  document.querySelectorAll("[data-mood]").forEach((item) => item.classList.toggle("is-selected", item === button));
  persist();
  toast(`Today feels ${state.mood}`);
}));

document.querySelector("#save-quick-note").addEventListener("click", () => {
  const input = document.querySelector("#quick-note-input");
  const body = input.value.trim();
  if (!body) {
    toast("Write a little something first");
    input.focus();
    return;
  }
  const note = { id: crypto.randomUUID(), title: body.split(/\s+/).slice(0, 6).join(" "), tags: ["quick capture"], body, updatedAt: Date.now() };
  state.notes.unshift(note);
  state.activeNoteId = note.id;
  persist();
  input.value = "";
  renderNotesList();
  toast("Thought caught and saved");
});

document.querySelector("#new-note").addEventListener("click", () => {
  const note = { id: crypto.randomUUID(), title: "", tags: [], body: "", updatedAt: Date.now() };
  state.notes.unshift(note);
  state.activeNoteId = note.id;
  persist();
  renderNotesList();
  renderNoteEditor();
  document.querySelector("#note-title").focus();
});

function updateActiveNote() {
  const note = activeNote();
  if (!note) return;
  note.title = document.querySelector("#note-title").value;
  note.tags = document.querySelector("#note-tags").value.split(",").map((tag) => tag.trim()).filter(Boolean);
  note.body = document.querySelector("#note-body").value;
  note.updatedAt = Date.now();
  debouncePersist();
  renderNotesList();
}

["#note-title", "#note-tags", "#note-body"].forEach((selector) => document.querySelector(selector).addEventListener("input", updateActiveNote));

document.querySelector("#delete-note").addEventListener("click", () => {
  const note = activeNote();
  if (!note) return;
  state.notes = state.notes.filter((item) => item.id !== note.id);
  state.activeNoteId = state.notes[0]?.id || null;
  persist();
  renderNotesList();
  renderNoteEditor();
  toast("Note deleted from this browser");
});

document.querySelector("#notes-search-input").addEventListener("input", (event) => {
  noteSearch = event.target.value;
  renderNotesList();
});

document.querySelector("#global-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleGlobalSearch();
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#global-search").focus();
  }
  if (event.key === "Escape") {
    closeThemeDrawer();
    document.querySelector("#sidebar").classList.remove("is-open");
  }
});

function openThemeDrawer() {
  document.querySelector("#theme-drawer").classList.add("is-open");
  document.querySelector("#theme-drawer").setAttribute("aria-hidden", "false");
  document.querySelector("#drawer-scrim").classList.add("is-open");
}

function closeThemeDrawer() {
  document.querySelector("#theme-drawer").classList.remove("is-open");
  document.querySelector("#theme-drawer").setAttribute("aria-hidden", "true");
  if (!document.querySelector("#sidebar").classList.contains("is-open")) document.querySelector("#drawer-scrim").classList.remove("is-open");
}

document.querySelector("#theme-trigger").addEventListener("click", openThemeDrawer);
document.querySelector("#close-theme").addEventListener("click", closeThemeDrawer);
document.querySelector("#drawer-scrim").addEventListener("click", () => {
  closeThemeDrawer();
  document.querySelector("#sidebar").classList.remove("is-open");
  document.querySelector("#drawer-scrim").classList.remove("is-open");
});

document.querySelector("#menu-button").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.add("is-open");
  document.querySelector("#drawer-scrim").classList.add("is-open");
});

document.querySelectorAll("[data-theme-option]").forEach((button) => button.addEventListener("click", () => {
  state.theme = button.dataset.themeOption;
  state.customAccent = "";
  applyTheme();
  persist();
}));

document.querySelector("#custom-accent").addEventListener("input", (event) => {
  state.customAccent = event.target.value;
  applyTheme();
  debouncePersist();
});

document.querySelector("#cozy-density").addEventListener("change", (event) => {
  state.cozy = event.target.checked;
  applyTheme();
  persist();
});

document.querySelectorAll("[data-admin-section]").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll("[data-admin-section]").forEach((item) => item.classList.toggle("is-active", item === button));
  document.querySelectorAll("[data-admin-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.adminPanel === button.dataset.adminSection));
}));

document.querySelector("#admin-copy-form").addEventListener("input", (event) => {
  const target = event.target;
  if (target.name === "brandName") state.adminConfig.brandName = target.value.slice(0, 32);
  if (target.dataset.adminNavLabel) state.adminConfig.navLabels[target.dataset.adminNavLabel] = target.value.slice(0, 24) || adminPageMeta[target.dataset.adminNavLabel].label;
  if (target.dataset.adminCopy) {
    const [page, field] = target.dataset.adminCopy.split(".");
    state.adminConfig.copy[page][field] = target.value;
  }
  saveAdminChange("Live changes saved");
});

document.querySelector("#admin-home-view").addEventListener("change", (event) => {
  state.adminConfig.homeView = event.target.value;
  saveAdminChange("Starting page updated");
  renderAdminEditor();
});

document.querySelector("#admin-view-list").addEventListener("change", (event) => {
  const key = event.target.dataset.adminViewVisible;
  if (!key) return;
  const hidden = new Set(state.adminConfig.hiddenViews);
  event.target.checked ? hidden.delete(key) : hidden.add(key);
  if (hidden.size === Object.keys(adminPageMeta).length) {
    event.target.checked = true;
    toast("Keep at least one visitor page visible");
    return;
  }
  state.adminConfig.hiddenViews = [...hidden];
  if (hidden.has(state.adminConfig.homeView)) state.adminConfig.homeView = state.adminConfig.order.find((item) => !hidden.has(item));
  saveAdminChange(`${state.adminConfig.navLabels[key]} ${hidden.has(key) ? "hidden" : "published"}`);
  renderAdminEditor();
});

document.querySelector("#admin-view-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-move]");
  if (!button) return;
  const index = state.adminConfig.order.indexOf(button.dataset.adminMove);
  const nextIndex = button.dataset.direction === "up" ? index - 1 : index + 1;
  if (index < 0 || nextIndex < 0 || nextIndex >= state.adminConfig.order.length) return;
  [state.adminConfig.order[index], state.adminConfig.order[nextIndex]] = [state.adminConfig.order[nextIndex], state.adminConfig.order[index]];
  saveAdminChange("Navigation order updated");
  renderAdminEditor();
});

const adminAppearanceControls = {
  "#admin-font-style": "fontStyle",
  "#admin-corner-style": "cornerStyle",
  "#admin-card-style": "cardStyle",
  "#admin-content-width": "contentWidth",
};

Object.entries(adminAppearanceControls).forEach(([selector, field]) => document.querySelector(selector).addEventListener("change", (event) => {
  state.adminConfig.appearance[field] = event.target.value;
  saveAdminChange("Appearance updated");
}));

document.querySelector("#admin-high-contrast").addEventListener("change", (event) => {
  state.adminConfig.appearance.highContrast = event.target.checked;
  saveAdminChange("Color contrast updated");
});

document.querySelector("#admin-motion").addEventListener("change", (event) => {
  state.adminConfig.appearance.motion = event.target.checked;
  saveAdminChange("Motion preference updated");
});

document.querySelector("#admin-cozy").addEventListener("change", (event) => {
  state.cozy = event.target.checked;
  applyTheme();
  saveAdminChange("Spacing updated");
});

document.querySelector("#open-palette-from-admin").addEventListener("click", openThemeDrawer);

document.querySelector("#toggle-visual-editor").addEventListener("click", startVisualEditor);
document.querySelector("#close-visual-editor").addEventListener("click", stopVisualEditor);
document.querySelector("#visual-editor-badge-exit").addEventListener("click", stopVisualEditor);
document.querySelector("#visual-return-admin").addEventListener("click", () => {
  stopVisualEditor();
  setView("admin");
  document.querySelector('[data-admin-section="appearance"]')?.click();
});

function updateSelectedOverride(field, value) {
  const element = selectedVisualElement();
  if (!element) return;
  const override = state.adminConfig.elementStyles[selectedEditorKey] || {};
  const empty = value === "" || value === null || value === undefined;
  if (empty) delete override[field];
  else override[field] = value;
  if (Object.keys(override).length) state.adminConfig.elementStyles[selectedEditorKey] = override;
  else delete state.adminConfig.elementStyles[selectedEditorKey];
  applyElementOverride(element, override);
  element.classList.add("is-editor-selected");
  persist();
  const status = document.querySelector("#admin-change-status");
  if (status) status.textContent = "Element style saved locally";
}

const visualInspectorFields = {
  "#visual-text-content": ["text", (value) => value.slice(0, 500)],
  "#visual-text-align": ["textAlign", (value) => value],
  "#visual-width": ["width", (value) => value],
  "#visual-offset-x": ["offsetX", (value) => Math.max(-240, Math.min(240, Number(value) || 0))],
  "#visual-offset-y": ["offsetY", (value) => Math.max(-240, Math.min(240, Number(value) || 0))],
  "#visual-padding": ["padding", (value) => value === "" ? "" : Math.max(0, Math.min(100, Number(value)))],
  "#visual-radius": ["radius", (value) => value === "" ? "" : Math.max(0, Math.min(80, Number(value)))],
  "#visual-background": ["background", (value) => value],
  "#visual-text-color": ["color", (value) => value],
  "#visual-border-color": ["borderColor", (value) => value],
};

Object.entries(visualInspectorFields).forEach(([selector, [field, normalize]]) => {
  const control = document.querySelector(selector);
  control.addEventListener(control.matches('input[type="color"], textarea, input[type="number"]') ? "input" : "change", () => updateSelectedOverride(field, normalize(control.value)));
});

document.querySelector("#visual-inspector-form").addEventListener("click", (event) => {
  const clear = event.target.closest("[data-clear-style]");
  if (!clear) return;
  updateSelectedOverride(clear.dataset.clearStyle, "");
  const element = selectedVisualElement();
  if (element) populateVisualInspector(element);
});

document.querySelector("#visual-reset-element").addEventListener("click", () => {
  const element = selectedVisualElement();
  if (!element) return;
  delete state.adminConfig.elementStyles[selectedEditorKey];
  applyElementOverride(element);
  element.classList.add("is-editor-selected");
  persist();
  populateVisualInspector(element);
  toast("Element restored to its inherited design");
});

document.querySelector("#visual-finish-selection").addEventListener("click", () => {
  document.querySelectorAll(".is-editor-selected, .is-editor-hover").forEach((item) => item.classList.remove("is-editor-selected", "is-editor-hover"));
  selectedEditorKey = "";
  document.querySelector("#visual-inspector-form").hidden = true;
  document.querySelector("#visual-editor-empty").hidden = false;
});

document.addEventListener("pointerover", (event) => {
  if (!visualEditorActive || event.target.closest("#visual-editor-inspector, #visual-editor-badge, .sidebar, .topbar, .mobile-nav")) return;
  const element = event.target.closest("[data-editor-key]");
  document.querySelectorAll(".is-editor-hover").forEach((item) => item.classList.remove("is-editor-hover"));
  if (element && element.dataset.editorKey !== selectedEditorKey) element.classList.add("is-editor-hover");
}, true);

document.addEventListener("click", (event) => {
  if (!visualEditorActive || event.target.closest("#visual-editor-inspector, #visual-editor-badge, .sidebar, .topbar, .mobile-nav")) return;
  const element = event.target.closest("[data-editor-key]");
  if (!element) return;
  event.preventDefault();
  event.stopPropagation();
  selectVisualElement(element);
}, true);

const visualMutationObserver = new MutationObserver(() => {
  if (visualEditorActive || Object.keys(state.adminConfig.elementStyles).length) requestAnimationFrame(applyVisualOverrides);
});
visualMutationObserver.observe(document.querySelector(".view-wrap"), { childList: true, subtree: true });

document.addEventListener("click", (event) => {
  const preview = event.target.closest("[data-preview-view]");
  if (preview) setView(preview.dataset.previewView);
});

document.querySelector("#export-site-config").addEventListener("click", () => {
  const payload = { schema: "daylily-site-config", version: 1, exportedAt: new Date().toISOString(), config: state.adminConfig, cozy: state.cozy, theme: state.theme, customAccent: state.customAccent };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(state.adminConfig.brandName || "daylily").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-site-settings.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("Site configuration downloaded");
});

document.querySelector("#import-site-config").addEventListener("click", () => document.querySelector("#site-config-file").click());
document.querySelector("#site-config-file").addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    if (payload.schema !== "daylily-site-config") throw new Error("Not a Daylily site configuration");
    state.adminConfig = sanitizeImportedAdminConfig(payload.config);
    if (typeof payload.cozy === "boolean") state.cozy = payload.cozy;
    if (["linen", "coastal", "matcha", "lilac", "terracotta", "nightfall"].includes(payload.theme)) state.theme = payload.theme;
    state.customAccent = /^#[0-9a-f]{6}$/i.test(payload.customAccent || "") ? payload.customAccent : "";
    renderAll();
    persist();
    toast("Site configuration imported");
  } catch (error) {
    toast(error.message || "That configuration could not be imported");
  } finally {
    event.target.value = "";
  }
});

document.querySelector("#reset-site-config").addEventListener("click", () => {
  if (!window.confirm("Reset the site copy, navigation, and appearance? Your planner, notes, and inspiration will stay intact.")) return;
  state.adminConfig = structuredClone(defaultAdminConfig);
  state.cozy = true;
  renderAll();
  persist();
  toast("Site design restored to defaults");
});

document.querySelector("#open-account").addEventListener("click", () => openDialog("#account-modal"));
["#open-integrations", "#connect-pinterest", "#source-connect-pinterest", "#calendar-help"].forEach((selector) => document.querySelector(selector).addEventListener("click", () => openDialog("#integrations-modal")));

document.querySelector("#preview-pinterest").addEventListener("click", () => {
  document.querySelector("#integrations-modal").close();
  inspirationFilter = "all";
  inspirationSearch = "";
  setView("inspiration");
  toast("Showing Pinterest-style sample pins — OAuth is not connected yet");
});

document.querySelector("#try-google-calendar").addEventListener("click", () => {
  const item = sortedEvents(todayISO)[0] || state.events[0];
  if (item) openGoogleCalendar(item); else toast("Create a moment first");
});

document.querySelector("#try-apple-calendar").addEventListener("click", () => {
  const item = sortedEvents(todayISO)[0] || state.events[0];
  if (item) downloadICS(item); else toast("Create a moment first");
});

document.querySelector("#created-google-button").addEventListener("click", () => {
  const item = state.events.find((event) => event.id === createdEventId);
  if (item) openGoogleCalendar(item);
});

document.querySelector("#created-apple-button").addEventListener("click", () => {
  const item = state.events.find((event) => event.id === createdEventId);
  if (item) downloadICS(item);
});

document.querySelector("#inspiration-layout").addEventListener("click", (event) => {
  document.querySelector("#inspiration-grid").classList.toggle("is-compact");
  event.currentTarget.querySelector("svg").style.transform = document.querySelector("#inspiration-grid").classList.contains("is-compact") ? "rotate(45deg)" : "";
});

document.querySelector("#notification-button").addEventListener("click", () => toast("You’re all caught up — a rare and lovely thing"));

document.querySelectorAll(".segmented-control button").forEach((button) => button.addEventListener("click", () => {
  button.parentElement.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
  toast(`${button.textContent} view selected`);
}));

window.addEventListener("hashchange", () => setView(location.hash.slice(1), false));
window.addEventListener("pagehide", persist);
document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
}));

renderAll();
const initialView = location.hash.slice(1) || (state.hobbyHome ? "hobbies" : state.adminConfig.homeView) || "today";
setView(initialView, false);
