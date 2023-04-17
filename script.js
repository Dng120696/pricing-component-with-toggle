'use strict';

const toggleBox = document.querySelector('.toggle-box');
const toggleIcon = document.querySelector('.toggle-icon');
const boxNum1 = document.getElementById('box-num-1');
const boxNum2 = document.getElementById('box-num-2');
const boxNum3 = document.getElementById('box-num-3');

toggleBox.addEventListener('click',() =>{
  toggleIcon.classList.toggle('active');
  
  if(!toggleIcon.classList.contains('active')){
    boxNum1.textContent = '19.99';
    boxNum2.textContent = '24.99';
    boxNum3.textContent = '39.99';
  }else{
    boxNum1.textContent = '199.99';
    boxNum2.textContent = '249.99';
    boxNum3.textContent = '399.99';
  }

})