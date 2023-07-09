const paragraph =
  "As a passionate 20-year-old pursuing a career in technology, I am currently enrolled in Georgia Tech's full-stack web development bootcamp.\nPrior to this, I earned an Adobe Certified Associate certificate, which solidified my interest in graphic design and web development.\nThrough my education and professional experience, I have developed a strong work ethic and a dedication to personal and professional growth.";
const typingContainer = document.getElementById("typing-container");
const btnEl = document.querySelector(".btn");
const wrapperEl = document.querySelector(".wrapper");

const toggleOptions = () => {
  const iconEl = btnEl.querySelector("i");

  wrapperEl.classList.toggle("active");

  if (iconEl.classList.contains("ri-share-line")) {
    iconEl.classList.replace("ri-share-line", "ri-close-line");
  } else {
    iconEl.classList.replace("ri-close-line", "ri-share-line");
  }
};

btnEl.addEventListener("click", toggleOptions);

function typeParagraph(callback) {
  let i = 0;
  const interval = setInterval(function () {
    if (i <= paragraph.length) {
      typingContainer.textContent = paragraph.slice(0, i);
      i++;
    } else {
      clearInterval(interval);
      if (callback) {
        callback();
      }
    }
  }, 20);
}

setTimeout(() => {
  typeParagraph(() => {
    let opacity = 1;
    const interval = setInterval(() => {
      wrapperEl.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 20);
  });
}, 1000);
