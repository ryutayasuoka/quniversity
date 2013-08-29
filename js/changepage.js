//div:jqmData(role='hoge')でdiv[data-role='page']と同じ処理

alert("aaaaaaa");


$(document).ready(function(){
    $("div:jqmData(role=page)").each(function() {
        //各要素に対してswipeleftイベントを追加
    $(this).bind("swipeleft", function(){
        //ページIDから現在のページナンバーを取得
        var nextPage = parseInt($(this).attr("id").split("page")[1]) + 1;

        if(nextPage > 3){
            return ;
        }

        $.mobile.changePage("#page"+nextPage, {
            transition : "fade"
        });
    });

        //各要素に対してswipeleftイベントを追加
        $(this).bind("swiperight", function(){
            //ページIDから現在のページナンバーを取得
            var nextPage = parseInt($(this).attr("id").split("page")[1]) - 1;

            if(nextPage < 1){
                return ;
            }

            $.mobile.changePage("#page"+nextPage, {
                transition : "pop"
            });
        })
    })
        });
