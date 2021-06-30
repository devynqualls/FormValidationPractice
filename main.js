const form = document.getElementById("customerinfo");
const nameLabel = document.getElementsByName("name");
const email = document.getElementsByName("email");
const country = document.getElementsByName("Country");
const zipCode = document.getElementsByName("zipcode");
const password = document.getElementsByName("password");
const passwordConf = document.getElementsByName("passwordConf");

email.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ''; // Reset the content of the message
      emailError.className = 'error'; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });