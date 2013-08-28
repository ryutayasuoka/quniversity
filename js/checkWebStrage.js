//webストレージが使用可能かを確認
if(typeof sessionStorage !== 'undefined'){
    alert('webストレージを使えます');
}else{
    alert('webストレージは使用できません。');
}


var storage = sessionStorage;

storage.setItem("name","安岡竜太");
storage.setItem("sex","男");
storage.setItem("answerCount","50");

//Strageの中身を表として表示
function viewStorage(){
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
