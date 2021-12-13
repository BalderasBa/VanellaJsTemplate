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
// --------------------- Our Gallery Section ---------------------
const galleryImages = document.querySelectorAll(".images-box img");
galleryImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overllay & addi it to body
    let overllay = document.createElement("div");
    overllay.className = "popup-overllay";
    document.body.appendChild(overllay);
    // create popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    // put alt text in head of img
    if (img.alt !== null) {
      let imgHead = document.createElement("h3");
      let imgtext = document.createTextNode(img.alt);

      imgHead.appendChild(imgtext);
      popupBox.appendChild(imgHead);
    }

    // create image
    let popupImage = document.createElement("img");
    popupImage.src = img.src;

    // put img in popup & popup in body
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);

    //create close button
    const closeBtn = document.createElement("span");
    let closeBtnText = document.createTextNode("X");
    closeBtn.appendChild(closeBtnText);
    closeBtn.className = "close-button";
    popupBox.appendChild(closeBtn);

    //close popup with click on overlay
    overllay.addEventListener("click", function (e) {
      document.querySelector(".popup-overllay").remove();
      popupBox.remove();
    });
  });
});
// close button
document.addEventListener("click", (e) => {
  // if popup opned remove it with overlay
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overllay").remove();
  }
});

// Our Gallery Section --------------------- ---------------------
