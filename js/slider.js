let slideWidth=document.getElementsByClassName('slides')[0].clientWidth
let shift=0
let count=0
let count2=0
console.log(slideWidth)

document.getElementById('next').addEventListener("click",()=>{
  count++
  console.log(count,[...document.getElementsByClassName('1')].length)
    if(count<[...document.getElementsByClassName('1')].length)
    {
      shift-=(slideWidth+100)
      document.getElementById('slidewrapper').style.marginLeft=`${shift}px`
      
    }
})




document.getElementById('previous').addEventListener("click",()=>{
  count--
  if(count==0)
  {
  }
  else
  {
  shift+=slideWidth+100
  document.getElementById('slidewrapper').style.marginLeft=`${shift}px`

  }

})





