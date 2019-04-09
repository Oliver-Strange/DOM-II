// Your code goes here
const navEvent = document.querySelector('.nav');

navEvent.addEventListener('mouseover', event =>{
    event.target.style.color = 'blue';
    event.target.style.fontSize = '2.5rem';
    setTimeout(function(){
        event.target.style.color = '';
        event.target.style.fontSize = '';
    }, 250);
}, false);

/*
.addEventListener('keydown', function(event){

});
.addEventListener('wheel', function(event){

});
.addEventListener('load', function(event){

});
.addEventListener('focus', function(event){

});
.addEventListener('resize', function(event){

});
.addEventListener('scroll', function(event){

});
.addEventListener('select', function(event){

});.addEventListener('dbclick', function(event){

});
.addEventListener('drag', function(event){

});
*/