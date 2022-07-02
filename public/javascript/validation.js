// LOGIN VALIDATION

function validateLoginForm(){
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
   

    if(email && password == ""){
        alert("Woof! Name and Password must be filled out.");
        return false;
    }

    else if (email == "" || password == ""){
        alert("Woof! Woof! Entry must be filled out.");
        return false;
    }

    else if (password.length < 6){
        alert("Password must be at least 6 characters. Please try again woof!");
        return false;
    }
    else{
        return true;
    }
};


loginForm.addEventListener('submit',validateLoginForm);

// SIGN UP FORM VALIDATION

function validateSignupForm(){
    const ownername = document.querySelector('#owner-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const dogname = document.querySelector('#dogname-signup').value.trim();
    const dogbreed = document.querySelector('#dogbreed-signup').value.trim();
    const dogsize = document.querySelector('#dogsize-signup').value.trim();
    // const location = document.querySelector('#location-signup').value.trim();
    const dogdescription = document.querySelector('#dogdescription-signup').value.trim();
   

    if(ownername && email && password && dogname && dogbreed && dogsize && dogdescription == ""){
        alert("Woof! You cannot submit a blank form! must be filled out.");
        return false;
    }

    else if (ownername == "" || email == "" || password == "" || dogname == ""|| dogbreed == ""|| dogsize == ""|| dogdescription == ""){
        alert("Woof! Woof! The entire form must be filled out.");
        return false;
    }

    else if (password.length < 6){
        alert("Your password must be at least 6 characters. Please try again woof!");
        return false;
    }
    else if (username.length < 4){
        alert("Your username must be at least 4 characters. Please try again woof!");
        return false;
    }
    else if (dogdescription.length > 200){
        alert("Your bio should be max 200 characters. Please try again woof!");
        return false;
    }
    else{
        return true;
    }
};

document.querySelector('.signup-form').addEventListener('submit', validateSignupForm);