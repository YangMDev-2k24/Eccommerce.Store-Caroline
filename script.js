
document.addEventListener('DOMContentLoaded', function () {
    // Programmatically open the modal
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  });



    document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card .card');

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  };

  // Function to reveal cards when they enter the viewport
  const revealCards = () => {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add('visible');
        card.classList.remove('hidden');
      }
    });
  };

  // Trigger on scroll and initial load
  window.addEventListener('scroll', revealCards);
  revealCards(); // Run once on page load
});


 document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card .card');

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  };

  // Function to reveal cards when they enter the viewport
  const revealCards = () => {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add('visible');
        card.classList.remove('hidden');
      }
    });
  };

  // Trigger on scroll and initial load
  window.addEventListener('scroll', revealCards);
  revealCards(); // Run once on page load
});

script>

  document.addEventListener('DOMContentLoaded', function () {
    // Programmatically open the modal
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  });



    document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card .card');

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  };

  // Function to reveal cards when they enter the viewport
  const revealCards = () => {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add('visible');
        card.classList.remove('hidden');
      }
    });
  };

  // Trigger on scroll and initial load
  window.addEventListener('scroll', revealCards);
  revealCards(); // Run once on page load
});
 document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card .card');

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  };

  // Function to reveal cards when they enter the viewport
  const revealCards = () => {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add('visible');
        card.classList.remove('hidden');
      }
    });
  };

  // Trigger on scroll and initial load
  window.addEventListener('scroll', revealCards);
  revealCards(); // Run once on page load
});

    

                    