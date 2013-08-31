//draw pie chart with canvas

$(document).ready(function(){

    //generate canvas 2d object.
    var can = $("#pie")[0].getContext("2d");
    can.beginPath();

});

//create pie chart
function createPieChart(data,can){

    var tilt;

    drawFan(100,100,100,tilt,30,"rgb(0,0,255)","rgb(0,255,0)",can);
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
