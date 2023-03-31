const paragraph = "";

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
