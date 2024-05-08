const menuIcon = document.querySelector(".menu-icon");
const navigationList = document.querySelector(".navigation-list");
const hamburgerMenu = document.querySelector(".fa-solid");
const heroSection = document.querySelector(".hero-section");

menuIcon.addEventListener("click", () => {
  if (hamburgerMenu.classList[1] === "fa-bars") {
    hamburgerMenu.classList.remove("fa-bars");
    hamburgerMenu.classList.add("fa-xmark");

    navigationList.style.display = "block";
    heroSection.style.paddingTop = "300px";
  } else {
    hamburgerMenu.classList.add("fa-bars");
    hamburgerMenu.classList.remove("fa-xmark");

    navigationList.style.display = "none";
    heroSection.style.paddingTop = "0px";
  }
});

//INSPIRACE NA INTERNETU

let countDownDate = setInterval(() => {
  let ourDate = new Date("June 25, 2024 22:20:00").getTime();
  let now = new Date().getTime();
  let distance = ourDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = `${days}:`;
  document.querySelector(".hours").innerHTML = `${hours}:`;
  document.querySelector(".minutes").innerHTML = `${minutes}:`;
  document.querySelector(".seconds").innerHTML = `${seconds}`;
}, 1000);
