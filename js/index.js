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
}, false);

//Keydown
 const bodyEvent = document.querySelector('body');
bodyEvent.addEventListener('keydown', function(event){
    bodyEvent.style.display = 'none';
    setTimeout(function(){
        event.target.style.display = '';
    }, 600);
}, false);

//Load
window.addEventListener('load', function(){
    alert('The party had arrived!');
});

//Resize
window.addEventListener('resize', function(){
    alert('We can accommodate all sizes!');
});
// const  = document. 
// .addEventListener('select', function(event){

// });

// const  = document. 
// .addEventListener('scroll', function(event){
//     event.target.style.transform = 'rotate(360)'
// });

/*
const  = document. 
.addEventListener('wheel', function(event){

});

const  = document. 
.addEventListener('focus', function(event){

});

const  = document. 
.addEventListener('resize', function(event){

});





const  = document. 
.addEventListener('dbclick', function(event){

});

const  = document. 
.addEventListener('drag', function(event){

});
*/