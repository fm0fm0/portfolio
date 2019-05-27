$(document).ready(function () {
    //animate
    new WOW().init();

    //gotop回首頁
    $("#gotop").click(function(){ 
        $("html,body").animate({scrollTop:0}, 333); //點擊自動捲到最上方
        return false;
    });
    $(window).scroll(function() {                   //瀏覽器捲動時執行以下程式
        if ( $(this).scrollTop() > 300 ){           //判斷距離頂端是否超過300px
            $("#gotop").fadeIn(222);                //超過300顯示效果
        } else {
            $("#gotop").stop().fadeOut(222);        //未超過300px停止並隱藏按鈕
        }
    }).scroll();   

    
    $("#btn-experience").click(function(){
        $("html,body").animate({scrollTop:$("#experience").offset().top},"slow");
        return false;
    });


    // Google Analytics
    window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-140136781-1');

});
