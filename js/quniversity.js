/***** 関数 *****/
//include html footer
function includeFooter(){
    $("footer").attr("class","box").html('<footer class="box"><div class="footer-menu"><a href="index.html">Myページ</a></div><div class="footer-menu"><a href="Qlist.html">皆の質問</a></div><div class="footer-menu"><a href="settings.html">設定</a></div></footer>');
    return ;
}

//count total number of selects
// function countSelects(data){
//     switch(data.length){
//         case

//     }

// }

/**************** function retated to Storage. ****************/
function resetUserStatus(storage){

    //initialization user status
    storage.removeItem("sex");
    storage.removeItem("username");
    storage.removeItem("relation");

    return ;
}

// function setQuestions(storage){

//         var QcontentArray = new Array(
//             "野球部とサッカー部どちらが好きですか？",
//             "キュロットスカートって男子からしたらどうなんですか？？",
//             "女の子って何でお互いを「可愛い」っていうの？",
//             "俺、女の子とふたりきりのとき沈黙が好きなんだけど、女の子もそうかなあ？",
//         );

//     return ;
// }

function setFirstUserStatus(storage){

    var key;
    var value;

    //set username
    key = "username";
    value = $("#username").val();
    if(!checkLength(value,5,8) ){
        alert("ニックネームは５文字以上８文字以下で指定してください。");
        return ;
    }
    storage.setItem(key,value);
    value = "";

    //validate sex
    if(storage.getItem("sex") == null){
        alert("性別を指定してください。");
        return ;
    }

    //set relation
    key = "relation";
    value = $("[name=relation]").val();
    storage.setItem(key,value);

    location = "index.html";
}

function checkLength(value,minLength,maxLength){
    if(value.length < minLength || value.length > maxLength){
        return false;
    }
    return true;
}

//Strageの中身を表として表示
function viewStorage(){

    var storage = localStorage;
    var list = document.getElementById('list');

    //HTML上のid=listの要素を削除
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    //sessionストレージの情報を取得
    for(var i=0; i<storage.length; i++){
        var _key = storage.key(i);

        //sessionストレージのキーと値を表示する
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        list.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        td1.innerHTML = _key;
        td2.innerHTML = storage.getItem(_key);
    }
}
