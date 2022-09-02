$(function(){
    $(".hamburger img").click(function() {
        $(".menu1").animate({marginLeft:"65%"}, 300);
	//	$(".cross").stop().show().css("color","#fff");
     });	
    
	 $(".cross").click(function() {
        $(".menu1").animate({marginLeft:"0"}, 300);
     });	
	
     // 메뉴상세
     $(".mm >li> a").click(function(){
        
        if($(this).next().is(":visible"))
        {
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/ico_nav.png");
        }else{

        $(".sub1").stop().slideUp(500);
        $(".menu1 ul.sub1 >li> a").children("img").attr("src","img/ico_nav.png");
        $(this).next().stop().slideDown(500);
        $(this).children("img").attr("src","img/ico_nav_on.png");
        };	
        

     });


     // 메뉴종료
     // $( ".cross" ).click(function() {
        // $(".menu1").animate({marginRight:"0"}, 300);
		// $( ".hamburger img" ).stop().show();
			// $(".cross").stop().hide();
   // });

});