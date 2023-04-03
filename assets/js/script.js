const images = document.querySelectorAll(".imgCarousel");
const mainPhoto = document.getElementById("mainPhoto");
const mainPhotoLink = document.querySelector(".mainPhotoContainer a");
const githubLink = document.getElementById("githubLink");

images.forEach((image) => {
  image.addEventListener("click", function () {
    const src = this.getAttribute("src");
    const githubLinkAttr = this.getAttribute("data-github-link");
    const imageLinkAttr = this.getAttribute("data-image-link");
    mainPhoto.setAttribute("src", src);
    mainPhotoLink.setAttribute("href", imageLinkAttr);
    githubLink.setAttribute("href", githubLinkAttr);
    githubLink.children[0].setAttribute(
      "src",
      "./assets/images/github-mark-black.png"
    );
    githubLink.children[0].setAttribute("alt", `View ${this.alt} on Github`);
    images.forEach((image) => image.classList.remove("active"));
    this.classList.add("active");
  });
});

let activeItem = document.querySelector(".imgCarousel.active");
const linkContainer = document.querySelector(".link-container");

const imageItems = document.querySelectorAll(".imgCarousel");
imageItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      activeItem = item;
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        const githubLink = activeItem.getAttribute("data-github-link");
        const imageLink = activeItem.getAttribute("data-image-link");

        linkContainer.innerHTML = `<a href="${githubLink}" target="_blank">GitHub |</a>
                               <a href="${imageLink}" target="_blank">Site</a>`;
        linkContainer.style.display = "block";
        positionLinkContainer();
        linkContainer.style.pointerEvents = "auto";
      }
    } else {
      linkContainer.style.display = "none";
    }
  });
});

function positionLinkContainer() {
  const activeRect = activeItem.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const centerX = activeRect.left + activeRect.width / 2;
  const centerY = activeRect.top + activeRect.height / 2 + scrollTop;

  linkContainer.style.position = "absolute";
  linkContainer.style.top = `${centerY - linkContainer.offsetHeight / 2}px`;
  linkContainer.style.left = `${centerX - linkContainer.offsetWidth / 2}px`;
  linkContainer.style.boxShadow = "0px 0px 10px rgba(20, 20, 20, 0.4)";
}

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 600) {
    linkContainer.style.display = "none";
  }
});
