const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const lightMode = document.body.classList.contains("light");
  themeIcon.textContent = lightMode ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", lightMode ? "Switch to dark theme" : "Switch to light theme");
});

const projectDetails = {
  bank: { type: "C++ · CONSOLE APPLICATION", title: "Banking System", description: "Developed a console-based banking system with account creation, deposits, withdrawals, and balance management. Applied object-oriented programming concepts and file handling.", tags: ["C++", "Object-oriented programming", "File handling"] },
  learning: { type: "WEB DEVELOPMENT", title: "Online Learning Platform", description: "Built a web-based online learning platform using HTML, CSS, JavaScript, PHP, and MySQL. Designed responsive user interfaces and managed user and course data.", tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"] },
  iot: { type: "NETWORKING · IOT", title: "IoT Smart Home System", description: "Designed a smart home automation simulation in Cisco Packet Tracer. Simulated smart lights, temperature sensors, door locks, and motion detectors, with remote monitoring and control through a central network system.", tags: ["Cisco Packet Tracer", "IoT", "Networking"] },
  car: { type: "JAVA · CONSOLE APPLICATION", title: "Car Rental System", description: "Created a Java console application to simulate car rental operations. Implemented vehicle listing, customer registration, booking, return management, and separate admin and customer modules. Used classes, inheritance, encapsulation, method overriding, arrays, and file handling.", tags: ["Java", "OOP", "Arrays", "File handling"] },
  figma: { type: "UI DESIGN · FIGMA", title: "Blog Website UI Design", description: "Designed a responsive blog website prototype in Figma, including home, blog, article, about, and contact pages. Created interactive prototypes and applied consistent layouts, typography, color, and UX practices.", tags: ["Figma", "Wireframing", "Prototyping", "UI/UX"] }
};

const modal = document.getElementById("projectModal");
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const project = projectDetails[card.dataset.project];
    document.getElementById("modalType").textContent = project.type;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;
    const tags = document.getElementById("modalTags");
    tags.replaceChildren(...project.tags.map(tag => {
      const span = document.createElement("span");
      span.textContent = tag;
      return span;
    }));
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });