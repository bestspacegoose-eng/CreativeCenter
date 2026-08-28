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

const defaultState = {
  view: "today",
  selectedDate: todayISO,
  focus: "Create with curiosity, not pressure.",
  weekNote: "",
  mood: "bright",
  theme: "linen",
  customAccent: "",
  cozy: true,
  profile: { name: "Jodie Rivera", email: "" },
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
let saveTimer;

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
    ? notes.map((note) => `<button class="note-list-item ${note.id === state.activeNoteId ? "is-active" : ""}" type="button" data-note-id="${note.id}"><strong>${escapeHTML(note.title || "Untitled note")}</strong><span>${escapeHTML(note.body || "An empty page")}</span><small>${formatRelativeDate(note.updatedAt)}</small></button>`).join("")
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
  renderNotesList();
  renderNoteEditor();
  renderProfile();
  applyTheme();
  hydrateIcons();
}

function setView(view, updateHash = true) {
  const validView = ["today", "planner", "inspiration", "notes"].includes(view) ? view : "today";
  state.view = validView;
  document.querySelectorAll("[data-view-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.viewPanel === validView));
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("is-active", button.dataset.view === validView));
  document.querySelector("#sidebar").classList.remove("is-open");
  if (!document.querySelector("#theme-drawer").classList.contains("is-open")) document.querySelector("#drawer-scrim").classList.remove("is-open");
  if (updateHash) history.replaceState(null, "", `#${validView}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  persist();
}

function openDialog(id) {
  const dialog = document.querySelector(id);
  if (dialog && !dialog.open) dialog.showModal();
}

function openEventModal() {
  const form = document.querySelector("#event-form");
  form.reset();
  document.querySelector("#event-date").value = state.view === "planner" ? state.selectedDate : todayISO;
  document.querySelector("#event-time").value = "10:00";
  document.querySelector("#event-duration").value = "60";
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

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) setView(viewButton.dataset.view);

  const viewLink = event.target.closest("[data-view-link]");
  if (viewLink) setView(viewLink.dataset.viewLink);

  if (event.target.closest("[data-open-event]")) openEventModal();
  if (event.target.closest("[data-open-inspiration]")) openDialog("#inspiration-modal");

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
const initialView = location.hash.slice(1) || state.view || "today";
setView(initialView, false);
