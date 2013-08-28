/*
 *@ ページ遷移を試してみるjsコード
 *
 */

$(document).ready(function(){
    $('#page').css({display:'block', marginLeft:$(window).width(), opacity:'0'});
    $('#page').animate({marginLeft:'0px', opacity:'1'}, 500);


    //$('#page').css({display:'block', opacity:'0'});
    //$('#page').animate({opacity:'1'}, 500);

    $('a').click(function(){
        var pass = $(this).attr("href");
        $('#page').animate({marginLeft:'-=' + $(window).width() + 'px',
                           opacity:'0'}, 500, function(){
                               location.href = pass;
                               setTimeout(function(){
                                   $('#page').css({marginLeft:'0', opacity:'1'}, 100);
                               });

                           });

    });
});
