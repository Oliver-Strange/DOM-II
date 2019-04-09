// Your code goes here

// Mouseover
const navEvent = document.querySelector('.nav');

navEvent.addEventListener('mouseover', event =>{
    event.preventDefault();
    event.target.style.color = 'blue';
    event.target.style.fontSize = '2.5rem';
    setTimeout(function(){
        event.target.style.color = '';
        event.target.style.fontSize = '';
    }, 400);
    event.stopPropagation();
}, false);

//Keydown
 const bodyEvent = document.querySelector('body');
bodyEvent.addEventListener('keydown', function(event){
    bodyEvent.style.display = 'none';
    setTimeout(function(){
        event.target.style.display = '';
    }, 600);
    event.stopPropagation();
}, false);

//Load
window.addEventListener('load', function(){
    alert('The party had arrived!');
});

//Resize
window.addEventListener('resize', function(){
    alert('We can accommodate all sizes!');
});

//scroll - popping up too much
window.addEventListener('scroll', function(event){
    alert('Lots to see and do!');
    event.stopPropagation();
});

//double click - not working on all btn
const signUpBtns = document.querySelector('.btn');
    signUpBtns.addEventListener('dblclick', function(event){
        signUpBtns.style.border = '3px solid green';
        event.stopPropagation();
    });

//wheel
bodyEvent.addEventListener('wheel', function(event){
    bodyEvent.style.backgroundColor = 'lightGrey';
    setTimeout(function(){
        bodyEvent.style.backgroundColor = '';
    }, 2000);
});

//drag - only working on one img
const imgContent = document.querySelector('.img-content img');
imgContent.addEventListener('dragstart',function(event){
    imgContent.style.border = '3px solid red';
    setTimeout(function(){
        imgContent.style.border = '';
    },500);
},false);

//focus
let navLinks = Array.from(document.querySelectorAll(".nav-link"));
navLinks.forEach(function(event){
  event.addEventListener("focus", event => {
    event.target.style.backgroundColor = 'pink';
    setTimeout(function(){
        event.target.style.backgroundColor = '';
    }, 500);
  });
  
});

//mouse out
bodyEvent.addEventListener('mouseout',function(event){
    event.target.style.backgroundColor = "lightBlue";
    setTimeout(function(){
        event.target.style.backgroundColor = '';
    }, 200);
});