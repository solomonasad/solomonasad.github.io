document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code goes here
  const slider = document.querySelector('.slider');
  const carousel = document.querySelector('.carousel');

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let direction = -1; // Use "let" instead of "var" for better scoping

  // prev.addEventListener('click', function() {
  //   if (direction == -1){
  //     slider.appendChild(slider.firstElementChild);
  //     direction = 1;
  //   }
  
  //   carousel.style.justifyContent = 'flex-end'
  //   slider.style.transform = 'translate(33.3%)';
  //   direction = -1;
  // });

  next.addEventListener('click', function() {
    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
      carousel.style.justifyContent = 'flex-start';
      direction = -1;
    }
    slider.style.transform = 'translate(-33.3%)';
  });
  //   direction = 1;
  //   carousel.style.justifyContent = 'flex-start'
  //   slider.style.transform = 'translate(-33.3%)';
  // });

  slider.addEventListener('transitionend', function() {
    if (direction == -1) {
      slider.appendChild(slider.firstElementChild);
      
    } else if (direction == 1) {
      slider.prepend(slider.lastElementChild);
    }

    slider.style.transform = 'none';
    slider.style.transform = 'translate(0)'
    slider.style.transition = 'none';
    
    setTimeout(function() {
      slider.style.transition = 'all 0.5s';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    
    parallaxSections.forEach(function(section) {
      const speed = 0.5;
      const yPos = -scrollTop * speed;
      section.style.backgroundPositionY = `${yPos}px`;
    });
  });
});
