window.onload = function () {
  function isInViewport(el) {
    console.log(el)
    const rect = el.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  


  

  const next = document.getElementById("next");
  const previous = document.getElementById("previous");
  
  const wrapper = document.getElementById("slidewrapper");
  const width = document.getElementsByClassName("slides")[0].offsetWidth + 100;
  
  let totalShift = 0;
  
  console.log(width);
  
  next.addEventListener("click", () => {
    if (!isInViewport([...document.getElementsByClassName("slides 1")][document.getElementsByClassName("slides 1").length-1])) {
    totalShift -= width;
    wrapper.style.transform = `translateX(${totalShift}px)`;
  }
  });
  
  
  previous.addEventListener("click", () => {
  if (!isInViewport([...document.getElementsByClassName("slides 1")][0])) {
  totalShift += width;
  wrapper.style.transform = `translateX(${totalShift}px)`;
  }
  });
















  const next2 = document.getElementById("next2");
  const previous2 = document.getElementById("previous2");
  
  const wrapper2 = document.getElementById("slidewrapper2");
  const width2 = document.getElementsByClassName("slides 2")[0].offsetWidth + 100;
  
  let totalShift2 = 0;
  
  
  next2.addEventListener("click", () => {
    if (!isInViewport([...document.getElementsByClassName("slides 2")][document.getElementsByClassName("slides 2").length-1])) {
    totalShift2 -= width2;
    wrapper2.style.transform = `translateX(${totalShift2}px)`;
  }
  });
  
  
  previous2.addEventListener("click", () => {
  if (!isInViewport([...document.getElementsByClassName("slides 2")][0])) {
  totalShift2 += width2;
  wrapper2.style.transform = `translateX(${totalShift2}px)`;
  }
  });
















}



