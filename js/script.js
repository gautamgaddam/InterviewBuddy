    $(document).ready(function() { 
        resize();
//        menu();
});
    function resize(){
        
      var viewportWidth = $(window).width();
        if (viewportWidth <=375 ){
           $(".remove").removeClass("text-right").addClass("add1");
           }
        if(viewportWidth <767){
            $(".remove").removeClass("text-right").addClass("text-centre");
            }
        if ((viewportWidth <992 )&& (viewportWidth<1023)){
            $(".z").removeClass("col-md-12");
            $(".z1").removeClass("col-md-5");
            $(".z2").removeClass("col-md-5");
            $(".z3").removeClass("col-md-5");
            $(".z4").removeClass("col-md-5");
            $(".remove").removeClass("text-right");
        }
        if(viewportWidth< 551){
            $('header').removeClass("sticky");
            $('#nav-icon3').click(function(){
                $('.dd').toggleClass('active');
                $('.dd  #dd1').click(function(){
                      $('.dd').removeClass('active');
                    $('#nav-icon3').removeClass('open');
                    })
                })
        }
    }

//function menu(){
//    var width= document.documentElement.clientWidth;
//    var menu=true;
//    if(width <=550){
//        var element = document.getElementById("#nav-icon3");
//        
//       
//    }
//
//}