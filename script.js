document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.btn-menu');
    const menuSection = document.querySelector('#menu');
  
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      menuSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  

 