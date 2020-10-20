$(document).ready(function(){
    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // fixed-top-navigation
    $(window).scroll(function(){
        if ($(this).scrollTop()  > 150){
            $('.navigation').addClass('navigation-fixed')
        }
        else {
            $('.navigation').removeClass('navigation-fixed')
        }
    })
})

// overlay
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// clipboard js
$(document).ready(function(){
    new ClipboardJS('.btn')
})