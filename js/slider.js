let shiftleft=590;
console.log(shiftleft);

document.getElementById('next').addEventListener("click",()=>{
    shiftleft-=590;
    [...document.getElementsByClassName('slides')].forEach(el=>{el.style.left=`-${shiftleft}px`})
})

document.getElementById('previous').addEventListener("click",()=>{
    shiftleft+=590;
    [...document.getElementsByClassName('slides')].forEach(el=>{el.style.left=`${shiftleft}px`})
})
