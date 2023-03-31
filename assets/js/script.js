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
