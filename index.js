let typed = new Typed(".animation", {
  strings: ["Desenvolvedor Front-End", "Web Developer"],
  typedSpeed: 70,
  backSpeed: 55,
  loop: true,
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".header", { duration: 1500 });
sr.reveal(".presentation", { duration: 1800 });
sr.reveal(".section-projects", {
  duration: 2000,
  rotate: { x: 0, y: 11350, z: 0 },
});

sr.reveal(".section-skills", {
  duration: 2200,
  rotate: { x: 0, y: 100, z: 0 },
});
sr.reveal("#redes", { duration: 2000 });

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
