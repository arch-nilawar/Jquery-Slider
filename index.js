$(window).load (function() {
    var image = $('.carouselContainer .carouselImgContainer');
    var imageWidth = image.width();
    var imageHeight = image.height();


    
    $('.carouselWrapper').css({
        width: '100%',
        height: imageHeight,
    });

    
    
    var totalWidthOfContainer = image.length * imageWidth;

    $('.carouselContainer').css({'width':totalWidthOfContainer,'height':imageHeight});

    if ( image.length > 1 ) {
        $('.carouselWrapper').append(
            '<div class="carouselControls"><a href="#" class="btnPrev"><i class="fa fa-angle-left"></i></a><a href="#" class="btnNext"><i class="fa fa-angle-right"></i></a></div>'
        );
      
        $(document).on('click','.btnNext',function(e){
            e.preventDefault();
           
            $('.carouselContainer').children("article.carouselImgContainer:first").appendTo('.carouselContainer');
            $('.carouselContainer').css("left", 0);
        });
        
        $(document).on('click','.btnPrev',function(e){
            e.preventDefault();
            $('.carouselContainer').children('article.carouselImgContainer:last').prependTo('.carouselContainer');
            $('.carouselContainer').css('left', -totalWidthOfContainer);
            
        });
    }
})