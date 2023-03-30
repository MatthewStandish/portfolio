const paragraph =
  "As a 20-year-old with a passion for graphic design and web development, I am currently enrolled in a full stack web development bootcamp through Georgia Tech.\nBefore beginning the bootcamp, I earned a certificate as an Adobe Certified Associate, which solidified my interest in pursuing a career in technology. Throughout my education and professional experience, I have developed a strong work ethic and a dedication to personal and professional growth.\nI am excited to continue building upon my skills and expanding my knowledge base in web development as I progress through the bootcamp.\nWith a background in graphic design and a growing expertise in web development, I am eager to explore opportunities in the technology industry that will allow me to apply my creative talents and technical skills to real-world projects.\nI am passionate about leveraging my skills to make a meaningful impact in the field and am excited to discover new opportunities to achieve my goals and advance my career.";

const typingContainer = document.getElementById("typing-container");

function typeParagraph() {
  let i = 0;
  const interval = setInterval(function () {
    if (i <= paragraph.length) {
      typingContainer.textContent = paragraph.slice(0, i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 40); // delay in milliseconds between characters
}

setTimeout(typeParagraph, 1000); // delay in milliseconds before typing starts
