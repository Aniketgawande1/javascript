

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');  // Use querySelector for single body element

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    
    // Set background color based on button id
    if (e.target.id === 'red') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});


// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
    
    
//     // Using switch-case to handle different background colors
//     switch (e.target.id) {
//       case 'red':
//       case 'white':
//       case 'blue':
//       case 'yellow':
//       case 'orange':
//       case 'green':
      

//         body.style.backgroundColor = e.target.id;
//         break;
//       default:
//         // Optionally handle any unexpected cases
//         console.log('Unhandled color:', e.target.id);
//         break;
//     }
//   });
// });
