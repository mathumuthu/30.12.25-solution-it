const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.position = "absolute";
    menu.style.top = "70px";
    menu.style.right = "20px";
    menu.style.background = "#020b3c";
    menu.style.padding = "20px";
    menu.style.borderRadius = "8px";
  } else {
    menu.style.display = "none";
  }
});

// Dropdown functionality
dropbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && !dropbtn.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});

function openTab(index){
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(t => t.classList.remove("active"));
  contents.forEach(c => c.classList.remove("active"));

  tabs[index].classList.add("active");
  contents[index].classList.add("active");
}





const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  let start = 0;
  const target = +counter.dataset.target;
  const speed = 30;

  const updateCounter = () => {
    start += Math.ceil(target / speed);
    if (start < target) {
      counter.innerText = start;
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});






  const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));










  const btn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

