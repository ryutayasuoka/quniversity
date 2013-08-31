/***** 関数 *****/
//include html footer
function includeFooter(){
    $("footer").attr("class","box").html('<div class="footer-menu"><a href="index.html">マイページ</a></div><div class="footer-menu" style="width:108px;"><a href="Qlist.html">皆の質問</a></div><div class="footer-menu"><a href="settings.html">設定</a></div>');
    return ;
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

    var Q1 = new Array("野球部とサッカー部どちらが好きですか？","male","4","no","10","はい","いいえ","その他","33","45","10");
    var Q2 = new Array("キュロットスカートって男子からしたらどうなんですか？","female","3","no","30","許せない","がっかり","逆にそそる","その他","300","100","35","6","30");
    var Q3 = new Array("女の子って何でお互いを「可愛い」ってゆうの？","female","5","yes","45","可愛いと思ってない","ホントに思ってる","その他","67","23","19");
    var Q4 = new Array("俺、女の子と２人きりの時沈黙が好きなんだけど、女の子もそうかなあ？","male","4","yes","5","はい","いいえ","論外","その他","3","30","68","2");
    var Q5 = new Array("どこからが浮気ですか？","male","5","yes","89","食事","バー","キス","YesComeon!","その他","3","10","56","32","5");

    storage.setItem("q1",JSON.stringify(Q1));
    storage.setItem("q2",JSON.stringify(Q2));
    storage.setItem("q3",JSON.stringify(Q3));
    storage.setItem("q4",JSON.stringify(Q4));
    storage.setItem("q5",JSON.stringify(Q5));

    return ;
}

function insertQuestions(storage){

    var qlist = $("#qlist");

    for(var i=1; i<6; i++){

        var _data = JSON.parse(storage.getItem("q"+i) );
        qlist.append('<div><a href="result.html?q'+i+'"><div class="'+_data[1]+'">'+_data[0]+'</div></a></div>');
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
