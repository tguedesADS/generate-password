let slider_input = document.getElementById("slider");
let btn = document.getElementById("btn");
let value_passoword = document.getElementById("value_password");
let password = document.getElementById("password");
let container_passoword = document.getElementById("container_password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let new_password = (value_passoword.innerHTML = slider_input.value);

slider.oninput = function () {
  value_passoword.innerHTML = this.value;
};

btn.addEventListener("click", function generate_password() {
  let pass = "";
  for (let i = 0, n = charset.length; i < slider_input.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  container_passoword.classList.remove("hide");
  password.innerHTML = pass;
  new_password = pass;
});

container_passoword.addEventListener("click", function copy_password() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(new_password);
});
