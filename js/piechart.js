//canvasで頑張って円グラフを作成する

$(document).ready(function(){

    //generate canvas 2d object.
    var can = $("#pie")[0].getContext("2d");
    can.beginPath();

    var timer = 0;
    //pieAnimation();
});

function pieAnimation(tilt,can){
    tilt++;

    can.clearRect(0,0,200,200);
    drawFan(100,100,100,tilt,30,"rgb(0,0,255)","rgb(0,255,0)",can);

    clearTImeout(timer);
    timer = setRimeout(pieAnimation,100);
}

function drawFan(x,y,radius,tilt,angle,strokeColor,fillColor,target){
    target.moveTo(x,y);
    target.arc(x, y, radius,
               -((90-tilt) * Math.PI / 180),
               -(((90-tilt) - angle) * Math.PI / 180),
               false);
    target.closePath();
    target.strokeStyle = strokeColor;
    target.fillStyle = fillColor;
    //fill
    target.fill();
    //draw
    target.stroke();
}
