let toggled=false


document.getElementById('mobilemenu').addEventListener("click",()=>{
    toggled = !toggled
    toggled?document.getElementById('links').style.display='flex':document.getElementById('links').style.display='none'
    toggled?[...document.getElementsByClassName('line')].forEach(element=>{element.style.background='black'}):[...document.getElementsByClassName('line')].forEach(element=>{element.style.background='white'})
})

