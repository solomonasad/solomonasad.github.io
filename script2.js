document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code goes here
  const slider = document.querySelector('.slider');
  const carousel = document.querySelector('.carousel');

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  var direction = -1;

  prev.addEventListener('click', function() {
    if (direction == -1) {
      slider.prepend(slider.lastElementChild); // Change append to prepend for previous button
      carousel.style.justifyContent = 'flex-end'; // Adjust justifyContent for previous button
      direction = 1;
    }
  
    slider.style.transform = 'translate(33.3%)';
    direction = -1;
  });

  next.addEventListener('click', function() {
    if (direction === 1) {
      slider.appendChild(slider.firstElementChild);
      carousel.style.justifyContent = 'flex-start'; // Adjust justifyContent for next button
      direction = -1;
    }
    slider.style.transform = 'translate(-33.3%)';
    direction = 1;
  });

  slider.addEventListener('transitionend', function() {
    if (direction == -1) {
      slider.appendChild(slider.firstElementChild);
    } else if (direction == 1) {
      slider.prepend(slider.lastElementChild);
    }

    slider.style.transform = 'none';
    slider.style.transform = 'translate(0)';
    slider.style.transition = 'none'; // Add this line to remove the transition immediately after transitionend
    
    setTimeout(function() {
      slider.style.transition = 'all 0.5s'; // Restore the transition after removing it
    });
  });
});
