// console.log("Hello")
const modalBtn=document.querySelector('.modal-btn');
const heading=document.querySelector('h1');
const banner=document.querySelector('.banner');
const closeBtn=document.querySelector('.close-btn');
const modalContainer=document.querySelector('.modal-container');
modalBtn.addEventListener('click',function(){
    banner.style.background="#ffffff57";
   modalContainer.classList.toggle('show-modal');
})
closeBtn.addEventListener('click',function(){
    modalContainer.classList.remove('show-modal');
    
})