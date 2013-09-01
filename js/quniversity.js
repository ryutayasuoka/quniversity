/***** 関数 *****/

//hidden address bar
function hiddenAddressbar(){
    setTimeout(scrollTo, 100, 0, 1);
    return ;
}

//include html footer
function includeFooter(){
    $("footer").attr("class","box").append('<div id="footer-left"></div><div><a href="index.html"><div id="footer-menu1"></div></a></div><div><a href="Qlist.html"><div id="footer-menu2"></div></a></div><div><a href="create.html"><div id="footer-menu3"></div></a></div><div id="footer-right"></div>');

    switch(location.href){
    case "http://creative2015.lolipop.jp/otonachallenge/html/index.html":
        $("#footer-menu1").css("background-image",'url("../images/footer/footer_my_activ.png")');
        break;
    case "http://creative2015.lolipop.jp/otonachallenge/html/Qlist.html":
        $("#footer-menu2").css("background-image",'url("../images/footer/footer_e_activ.png")');
        break;
    case "http://creative2015.lolipop.jp/otonachallenge/html/create.html":
        $("#footer-menu3").css("background-image",'url("../images/footer/footer_q_activ.png")');
        break;
    }

    return ;
}

//view status page
function viewStatus(storage){
    $("#status-page").show("slow");
}

function removeStatus(){
    $("#status-page").hide("slow");
}

/**************** function retated to Storage. ****************/
function resetUserStatus(storage){

    //initialization user status
    storage.removeItem("sex");
    storage.removeItem("username");
    storage.removeItem("relation");

    return ;
}

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

function getRequest(){

    if(location.search.length < 1){ return false;}

    return location.search.substr(1);
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


/* set some example questions*/
function setQuestions(storage){

    var Q1 = new Array("野球部とサッカー部どちらが好きですか？","male","4","no",10,"はい","いいえ","その他",33,45,10);
    var Q2 = new Array("キュロットスカートって男子からしたらどうなんですか？","female","3","no",30,"許せない","がっかり","逆にそそる","その他",300,100,35,6);
    var Q3 = new Array("女の子って何でお互いを「可愛い」ってゆうの？","female","5","yes",45,"可愛いと思ってない","ホントに思ってる","その他",67,23,19);
    var Q4 = new Array("俺、女の子と２人きりの時沈黙が好きなんだけど、女の子もそうかなあ？","male","4","yes",5,"はい","いいえ","論外","その他",3,30,68,2);
    var Q5 = new Array("どこからが浮気ですか？","male","5","yes",89,"食事","バー","キス","YesComeon!","その他",3,10,56,32,5);

    storage.setItem("q1",JSON.stringify(Q1));
    storage.setItem("q2",JSON.stringify(Q2));
    storage.setItem("q3",JSON.stringify(Q3));
    storage.setItem("q4",JSON.stringify(Q4));
    storage.setItem("q5",JSON.stringify(Q5));

    return ;
}

function insertQuestions(storage){

    //preapare some examples
    var username = new Array("りゅーちゃん","なかむら","おーつき","だいふく","やまはた");
    var iconname = new Array("hiyoko","peanuts","hiyoko","peanuts","hiyoko");

    var qlist = $("#list-content");
    var sex = storage.getItem("sex");

    for(var i=0; i<5; i++){

        var _data = JSON.parse(storage.getItem( "q"+(i+1) ) );

        if(sex == _data[1]){
            qlist.append('<div class="list-tip"><a href="result.html?q'+(i+1)+'"><div><div class="box"><div class="list-icon"><img src="../images/result/'+iconname[i]+'.png" /></div><div class="list-content box"><div><div class="q-username">'+username[i]+'</div><div class="q-content">'+_data[0]+'</div><div class="q-answer">集計結果を見る</div></div><div class="sex-image"><img src="../images/everyoneQ/everyonesQ_boy_logo.png" /></div></div></div></div></a></div>');
        }else{
            qlist.append('<div class="list-tip"><a href="select.html?q'+(i+1)+'"><div><div class="box"><div class="list-icon"><img src="../images/result/'+iconname[i]+'.png" /></div><div class="list-content box"><div><div class="q-username">'+username[i]+'</div><div class="q-content">'+_data[0]+'</div><div class="q-answer">回答する</div></div><div class="sex-image"><img src="../images/everyoneQ/everyonesQ_girl_logo.png" /></div></div></div></div></a></div>');
        }

    }

    return;
}

function calcSelectsNum(data){
    switch(data.length){
    case 9:
        return 2;
        break;
    case 11:
        return 3;
        break;
    case 13:
        return 4;
        break;
    case 15:
        return 5;
        break;
    }
    return false;
}

function insertComments(){

    var comments = new Array("断然野球部でしょ！","私も野球部！","サッカー一択","サッカー部のマネやってました！","難しいなー","人によるよねーー");
    var sex = new Array("boy","girl","boy","girl","girl","girl");
    var selects = new Array("①","①！","②","②","③","③");
    var icon = new Array("peanuts","hiyoko","peanuts","hiyoko","hiyoko","hiyoko");
    var username = new Array("だいふく","おーつき","りゅーちゃん","たけもと","いたじき","なかむら");

    for(var i=0; i<6; i++){
        $("#comment-lists").append('<div class="comment-tip box"><div class="comment-icon"><img src="../images/result/'+icon[i]+'.png" /></div><div class="comment-right"><div class="comment-select">'+username[i]+'<span style="margin-left:10px;">回答：'+selects[i]+'</span></div><div class="comment-content">'+comments[i]+'</div></div><div class="comment-sex-image"><img src="../images/result/result_'+sex[i]+'.png" /></div></div>');
    }
}
