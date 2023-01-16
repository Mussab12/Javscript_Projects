const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
const heading=document.getElementById('heading')

btn.addEventListener('click',function(){
    const randomNumber=getRandomNumber();
    let pixel='px';
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber]; // for changing value on span
    heading.style.fontSize=getRandomNumbergen()+pixel;
    
   
})
function getRandomNumber()
{
    return Math.floor(Math.random()*colors.length);
}
function getRandomNumbergen()
{
    return Math.floor(Math.random()*20);
}