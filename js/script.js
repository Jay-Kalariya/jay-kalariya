let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

// window.onscroll = () =>{
//    navbar.classList.remove('active');
// }

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

// typewriter effect
const typeWriter = document.getElementById('typewriter-text');
const text = 'Discover the World With Us';
typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);