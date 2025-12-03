const loginform = document.querySelector(".login-form");
loginform.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const mail = form.elements.email.value;
  const password = form.elements.password.value;

  if (mail === "" || password === "") {
    alert("All form fields must be filled in");
  }

  console.log(`E-mail: ${mail}, Password: ${password}`);
  form.reset();
}
