// --------------------- Landing Page ---------------------
const landingPage = document.querySelector(".landing-page");
// get array of images
let imgArray = [];
for (let i = 0; i < 5; i++) {
  imgArray.push(`./images/landing${i + 1}.jpg`);
}

// random background option
function randomBackgr() {
  if (backgroundOption) {
    theInterval = setInterval(() => {
      let randomimage = Math.ceil(Math.random() * imgArray.length); // get random number
      landingPage.style.backgroundImage = `url(./images/landing${randomimage}.jpg)`; // change background
      landingPage.style.transition = "1s ease-in-out";
    }, 6000);
  }
}
randomBackgr();

// Landing Page --------------------- ---------------------

// --------------------- Our Skills Section ---------------------
const ourSkills = document.querySelector(".skills");
const skillProgress = document.querySelectorAll(".skill-progress span");
let skillsOffsetTop = ourSkills.offsetTop;

window.onscroll = () => {
  if (this.scrollY >= skillsOffsetTop) {
    skillProgress.forEach((element) => {
      element.style.width = element.dataset.progress;
    });
  }
};
// Our Skills Section --------------------- ---------------------
