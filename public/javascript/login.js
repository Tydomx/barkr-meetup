// event listener for login form

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
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

// event listener for sign up form
async function signupFormHandler(event) {
  event.preventDefault();

  const ownername = document.querySelector('#owner-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const dogname = document.querySelector('#dogname-signup').value.trim();
  const dogbreed = document.querySelector('#dogbreed-signup').value.trim();
  const dogsize = document.querySelector('#dogsize-signup').value.trim();
  // const location = document.querySelector('#location-signup').value.trim();
  const dogdescription = document.querySelector('#dogdescription-signup').value.trim();

  // does username need to be user_name???
  if (ownername && dogname && dogbreed && dogsize && location && dogdescription && username && email && password) {
    const response = await fetch('/api/owners', {
      method: 'post',
      body: JSON.stringify({
        owner_name: ownername,
        dog_name: dogname,
        dog_breed: dogbreed,
        dog_size: dogsize,
        location,
        dog_description: dogdescription,
        user_name: username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // check the response status
    if (response.ok) {
      console.log('success');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);