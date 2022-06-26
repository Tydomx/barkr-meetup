// event listener for login form

const loginForm =  document.querySelector('.login-form');

async function loginFormHandler(event) {
    event.preventDefault();
    console.log('Working');
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/owners/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
 loginForm.addEventListener('submit', loginFormHandler);



// event listener for sign up form
async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // does username need to be user_name???
    if (username && email && password) {
      const response = await fetch('/api/owners', {
        method: 'post',
        body: JSON.stringify({
          user_name:username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      // check the response status
    if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);