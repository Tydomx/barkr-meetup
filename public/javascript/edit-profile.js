async function editProfileHandler(event) {
    event.preventDefault();

    const ownername = document.querySelector('#owner-edit').value.trim();
    const username = document.querySelector('#username-edit').value.trim();
    const email = document.querySelector('#email-edit').value.trim();
    const password = document.querySelector('#password-edit').value.trim();
    const dogname = document.querySelector('#dogname-edit').value.trim();
    const dogbreed = document.querySelector('#dogbreed-edit').value.trim();
    const dogsize = document.querySelector('#dogsize-edit').value.trim();
    // const location = document.querySelector('#location-edit').value.trim();
    const dogdescription = document.querySelector('#dogdescription-edit').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/owners/1`, {
        method: 'PUT',
        body: JSON.stringify({

        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#edit-profile-form').addEventListener('submit', editProfileHandler);