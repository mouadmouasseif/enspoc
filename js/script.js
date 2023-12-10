
  $(document).ready(function(){
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
      // Obtenez l'index de l'élément actif dans le carrousel
      var index = $(e.relatedTarget).index();
      
      // Array d'arrière-plans correspondants à chaque sport
      var sportBackgrounds = [
        'url(../images/basketball_background.jpg)',
        'url(../images/football_background.jpg)',
        'url(../images/volleyball_background.jpg)',
        'url(../images/chess_background.jpg)'
      ];
      
      // Mettez à jour l'arrière-plan en fonction de l'index
      $('#aboutContainer').css('background-image', sportBackgrounds[index]);
    });
  });
  $(document).ready(function() {
    $('#carouselExampleIndicators').on('slid.bs.carousel', function() {
      var activeSlideIndex = $('.carousel-item.active').index();
      updateBackgroundImage(activeSlideIndex);
    });
  
    function updateBackgroundImage(slideIndex) {
      var imagePath;
      switch (slideIndex) {
        case 0:
          imagePath = 'url(../images/Enspoc.jpg)';
          break;
        case 1:
          imagePath = 'url(../images/autre_image.jpg)';
          break;
        default:
          imagePath = 'url(../images/default_image.jpg)';
          break;
      }
      $('#backgroundImage').css('background-image', imagePath);
    }
  });
  

