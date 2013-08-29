$(document).ready(function(){
    viewStorage();
    includeFooter();

});


/***** 関数 *****/
//include html footer
function includeFooter(){
    $("footer").attr("class","box").html('<footer class="box"><div class="footer-menu"><a href="index.html">Myページ</a></div><div class="footer-menu"><a href="Qlist.html">皆の質問</a></div><div class="footer-menu"><a href="settings.html">設定</a></div></footer>');
    return ;
}
