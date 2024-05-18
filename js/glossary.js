    document.addEventListener('DOMContentLoaded', function () {
      var hash = window.location.hash.substr(1);
      var element = document.getElementById(hash); 
      if (element) {
        element.style.backgroundColor = '#7CE1BF'; 
        element.style.padding = '5px'; 
        element.scrollIntoView(); 
      }
    });
