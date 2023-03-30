let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");

function updateImage(event) {
  let image = event.target;

  mainPhoto.classList.add("fade-out");

  image.classList.remove("fade-in");

  void image.offsetWidth;

  image.classList.add("fade-in");

  setTimeout(function () {
    mainPhoto.src = image.src;

    mainPhoto.classList.remove("fade-out");
  }, 500);
}

images.forEach(function (image) {
  image.addEventListener("click", updateImage);

  image.classList.add("fade-in");
});
