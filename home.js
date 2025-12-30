const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});





const slides = document.querySelectorAll(".slide-card");
const img = document.getElementById("slideImg");

const images = [
  "https://images.unsplash.com/photo-1581091870627-3f89c1a1c3b5",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
];

let index = 0;

function changeSlide(){
  slides.forEach(s=>s.classList.remove("active"));
  slides[index].classList.add("active");
  img.src = images[index];
  index = (index + 1) % slides.length;
}

slides.forEach((slide,i)=>{
  slide.addEventListener("click",()=>{
    index = i;
    changeSlide();
  });
});

setInterval(changeSlide, 4000);








/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===== COUNT UP ===== */
const counters = document.querySelectorAll(".count");

counters.forEach(counter=>{
  const update = ()=>{
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const inc = Math.ceil(target / 60);

    if(current < target){
      counter.innerText = current + inc;
      setTimeout(update, 30);
    }else{
      counter.innerText = target;
    }
  };
  update();
});










// Newsletter button pulse
const btn = document.querySelector(".newsletter button");

btn.addEventListener("mouseenter",()=>{
  btn.style.boxShadow = "0 0 20px rgba(143,255,47,.8)";
});

btn.addEventListener("mouseleave",()=>{
  btn.style.boxShadow = "none";
});
