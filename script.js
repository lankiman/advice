// JavaScript
const fetchButton = document.getElementById("advice_button_js");
const adviceContainer = document.getElementById("advice_container_js");
const adviceCount = document.getElementById("advice_count_js");

let adviceCounter = 0;

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      adviceContainer.innerText = `"${advice}"`;
      adviceCounter++;
      adviceCount.innerText = adviceCounter.toString();
    })
    .catch(error => {
      console.log("An error occurred:", error);
    });
}

// Fetch advice on page load
document.addEventListener("DOMContentLoaded", fetchAdvice);

// Fetch advice on button click
fetchButton.addEventListener("click", fetchAdvice);
