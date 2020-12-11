$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('#thaydoi').on('click',function (){
        $('.toggle-content').toggle();
    })
    $.ajax({
        url: "test.html",
        context: document.body
      }).done(function() {
        $( this ).addClass( "done" );
      });
  });