
function validateLoginForm(){
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
   

    if(email && password == ""){
        alert("Name and Password must be filled out");
        return false;
    }

    else if (email == "" || password == ""){
        alert("Must be filled out");
        return false;
    }

    else if (password.length < 6){
        alert("Password must be at least 6 characters. Please try again");
        return false;
    }
    else{
        return true;
    }
};


loginForm.addEventListener('submit',validateLoginForm);

//  const submit = document.getElementById("submit");

// submit.addEventListener("click", validate);

// function validate(e) {
//   e.preventDefault();

//   const firstNameField = document.getElementById("firstname");
//   let valid = true;

//   if (!firstNameField.value) {
//     const nameError = document.getElementById("nameError");
//     nameError.classList.add("visible");
//     firstNameField.classList.add("invalid");
//     nameError.setAttribute("aria-hidden", false);
//     nameError.setAttribute("aria-invalid", true);
//   }
//   return valid;
// }