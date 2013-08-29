/**************** Function retated to Storage. ****************/
function setFirstUserStatus(){

    var storage = localStorage;
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

    //set sex
    // key = "sex";
    // value = $("#sex").val();
    // alert(value);
    // storage.setItem(key,value);

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
