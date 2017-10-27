(function($){
  var imageList = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg'],
      tiles = $('.tile'),
      tileLength = tiles.length,
      iMaxImageUse = tileLength/imageList.length,
      randomizeImages = [];

  
  playGame();
            

  function playGame() {

    //if ('.tile').addClass('flipped');

    $('.tile').click(function(){

      $(this).addClass('flipped');
      

      if ($(".flipped").length == 3) {
        $('.tile').removeClass('flipped');
         var value = $('.flipped').find('img').attr('src');
      

     // else ($(".flipped").length == 3) {
     //   $('.tile').addClass('.matched');
      //   var match = $('.matched').find('img').attr('src');

      };   
         
    
          
  
      

        //$(this).addClass('matched');
    
      
    });

      $( ".tile" ).each(function( index ) {
        var index = getImageIndex(),
            imagePath = imageList[index];
        $(this).html('<img src="'+imagePath+'" alt="" />');

      });
  
  };



  function getImageIndex() {

    var searchingForImages = true;

    while( searchingForImages ) {
      var maxNumber = imageList.length;
          iRandomImageIndex = Math.floor((Math.random() * maxNumber)),
          imageUseCount = countInArray(randomizeImages, iRandomImageIndex);

      if(imageUseCount < iMaxImageUse ) {
        randomizeImages.push(iRandomImageIndex);
        searchingForImages = false;
      }
    }

    return iRandomImageIndex;
  }

  function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
  }
})(jQuery)