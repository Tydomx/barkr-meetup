// event listener for dog-info form 
// will not using anymore due to time

// async function dogFormHandler(event) {
//     event.preventDefault();
  
//     const dogname = document.querySelector('#dog-name').value.trim();
//     const dogbreed = document.querySelector('#dog-breed').value.trim();
//     const dogsize = document.querySelector('#dog-size').value.trim();
//     const location = document.querySelector('#location').value.trim();
//     const dogdescription = document.querySelector('#dog-description').value.trim();
  
//     // is the api fetch correct? 
//     // need route to be setup on backend so it can show up on homepage for users who sign up only
//     // need to consider how users will edit profile
//     if (dogname && dogbreed && dogsize && location && dogdescription) {
//       const response = await fetch('/api/owners', {
//         method: 'post',
//         body: JSON.stringify({
//           dog_name:dogname,
//           dog_breed:dogbreed,
//           dog_size:dogsize,
//           location,
//           dog_description:dogdescription
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
//       // check the response status
//     if (response.ok) {
//         console.log('success');
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
  
//   document.querySelector('.dog-form').addEventListener('submit', dogFormHandler);