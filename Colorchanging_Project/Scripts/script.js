const colorChanger=document.querySelector('#colorChange');

colorChanger.addEventListener('click',function(){
    let bodyColor=document.querySelector('body');
    
    let[r,g,b]=randomRgbColor();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    let color="#" + hr + hg + hb;
    bodyColor.style.background=color;
})

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}


setInterval(
    function () {
        let[r,g,b]=randomRgbColor();
        let hr = r.toString(16).padStart(2, '0');
        let hg = g.toString(16).padStart(2, '0');
        let hb = b.toString(16).padStart(2, '0');
        let color="#" + hr + hg + hb;
    document.querySelector('body').style.background=color;
    },1000);