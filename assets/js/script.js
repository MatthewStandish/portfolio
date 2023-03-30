// Use a more descriptive name for the variable containing the image elements
const carouselImages = Array.from(
  document.getElementsByClassName("imgCarousel")
);

const mainPhoto = document.getElementById("mainPhoto");

function updateImage(event) {
  const clickedImage = event.target;

  mainPhoto.classList.add("fade-out");

  clickedImage.classList.remove("fade-in");

  void clickedImage.offsetHeight;

  clickedImage.classList.add("fade-in");

  setTimeout(function () {
    mainPhoto.src = clickedImage.src;

    mainPhoto.classList.remove("fade-out");

    clickedImage.classList.add("fade-in");
  }, 300);
}

carouselImages.forEach(function (image) {
  image.addEventListener("click", updateImage);

  image.classList.add("fade-in");
});
