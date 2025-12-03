const inp = document.querySelector("#name-input");
const names = document.querySelector("#name-output");
inp.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  nameOutput.textContent = value === "" ? "Anonymous" : value;
});
