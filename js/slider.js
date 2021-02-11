
let next = [...document.querySelectorAll('#next')]
let previous = [...document.querySelectorAll('#previous')];
let sliders = [...document.querySelectorAll('.slidewrapper')]


    new Glider(sliders[0], {
        slidesToShow: 1,
        draggable:true,
        arrows: {
          prev: `#previous`,
          next: `#next`
        }
      });

      new Glider(sliders[1], {
        slidesToShow: 1,
        draggable:true,
        arrows: {
          prev: `#previous2`,
          next: `#next2`
        }
      });
