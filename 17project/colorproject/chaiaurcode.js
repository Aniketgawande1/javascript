/*console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

const buttons = document.querySelectorAll('button');
const bodyy = document.querySelectorAll('body');

buttons.forEach(function(button){
   button.addEventListener('click',function(g){
      switch (e.target.id) {
         case 'grey':
           body.style.backgroundColor === 'grey';
           break;
   });
});*/


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    
    
    // Using switch-case to handle different background colors
    switch (e.target.id) {
      case 'red':
      case 'white':
      case 'blue':
      case 'yellow':
      case 'orange':
      case 'green':
      

        body.style.backgroundColor = e.target.id;
        break;
      default:
        // Optionally handle any unexpected cases
        console.log('Unhandled color:', e.target.id);
        break;
    }
  });
});
