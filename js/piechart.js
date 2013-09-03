function drawFan(x,y,radius,tilt,angle,strokeColor,fillColor,target){
    target.beginPath();
    target.strokeStyle = strokeColor;
    target.fillStyle = fillColor;
    target.moveTo(x,y);
    target.arc(x, y, radius,
               -((90-tilt) * Math.PI / 180),
               -(((90-tilt) - angle) * Math.PI / 180),
               false);
    target.closePath();
     //fill
    target.fill();
    //draw
    target.stroke();
}
