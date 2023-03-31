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

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600 && activeItem) {
    const githubLink = activeItem.getAttribute("data-github-link");
    const imageLink = activeItem.getAttribute("data-image-link");
    const linkContainer = document.querySelector(".link-container");

    linkContainer.innerHTML = `<a href="${githubLink}" target="_blank">GitHub Link</a>
                               <a href="${imageLink}" target="_blank">Image Link</a>`;
  }
});

const imageItems = document.querySelectorAll(".imgCarousel");
imageItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      activeItem = item;
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        const githubLink = activeItem.getAttribute("data-github-link");
        const imageLink = activeItem.getAttribute("data-image-link");
        const linkContainer = document.querySelector(".link-container");
        linkContainer.style.display = "block";

        linkContainer.innerHTML = `<a href="${githubLink}" target="_blank">GitHub Link |</a>
                                   <a href="${imageLink}" target="_blank">Image Link</a>`;

        const activeRect = activeItem.getBoundingClientRect();
        const centerX = activeRect.left + activeRect.width / 2;
        const centerY = activeRect.top + activeRect.height / 2;

        linkContainer.style.position = "absolute";
        linkContainer.style.top = `${
          centerY - linkContainer.offsetHeight / 2
        }px`;
        linkContainer.style.left = `${
          centerX - linkContainer.offsetWidth / 2
        }px`;
        linkContainer.style.pointerEvents = "auto";

        window.addEventListener("click", () => {
          const screenWidth = window.innerWidth;
          if (screenWidth < 600 && activeItem) {
            const activeRect = activeItem.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            linkContainer.style.top = `${activeRect.top + scrollTop}px`;
            linkContainer.style.left = `${activeRect.left}px`;
          }
        });
      }
    }
  });
});
