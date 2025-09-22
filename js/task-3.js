const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
return span.textContent = event.target.value.trim();
}