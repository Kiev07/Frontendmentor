document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  const nameInput = document.getElementById("name");
  const errorName = document.getElementById("error-name");

  const lastName = document.getElementById("last-name");
  const errorLastName = document.getElementById("error-last-name");

  const email = document.getElementById("email");
  const errorEmail = document.getElementById("error-email");

  const queryInputs = document.querySelectorAll('input[name="query"]');
const errorQuery = document.getElementById("error-query");

const checkbox = document.getElementById("check_box");
const errorCheck = document.getElementById("error-check");

const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");


  form.addEventListener("submit", function (e) {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      errorName.style.display = "block";
      nameInput.classList.add("input-error");
      isValid = false;
    } else {
      errorName.style.display = "none";
      nameInput.classList.remove("input-error");
    }

   if (lastName.value.trim() === "") { 
    errorLastName.style.display = "block";
    lastName.classList.add("input-error");
    isValid = false;
    } else {
        errorLastName.style.display = "none";
        lastName.classList.remove("input-error");
        }

if (email.value.trim() === "" || !isValidEmail(email.value)) {
  errorEmail.style.display = "block";
  email.classList.add("input-error");
  isValid = false;
} else {
  errorEmail.style.display = "none";
  email.classList.remove("input-error");
}

let querySelected = false;
queryInputs.forEach((input) => {
  if (input.checked) {
    querySelected = true;
  }
});

if (!querySelected) {
  errorQuery.style.display = "block";
  isValid = false;
} else {
  errorQuery.style.display = "none";
}

if (message.value.trim() === "") {
      errorMessage.style.display = "block";
      message.classList.add("input-error");
      isValid = false;
    } else {
      errorMessage.style.display = "none";
      message.classList.remove("input-error");
    }


if (!checkbox.checked) {
  errorCheck.style.display = "block";
  isValid = false;
} else {
  errorCheck.style.display = "none";
}
        



    if (!isValid) {
      e.preventDefault(); // Detiene el envío
    }
  });

  function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const textmessage = document.getElementById("message");

textmessage.addEventListener("input", function () {
  this.style.height = "auto"; // Reinicia el alto
  this.style.height = this.scrollHeight + "px"; // Ajusta al contenido
});

});
