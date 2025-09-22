const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
const userInput = event.target.value.trim();
    if (userInput === "") {
        span.textContent = "Anonymous";
    }
else span.textContent = userInput;
}