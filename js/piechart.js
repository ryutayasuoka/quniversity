/* create pie chart */

function createPieChart(data,can){

    var total = 0;
    var angle = 0;
    var totalTilt = 0;
    var color = new Array("rgb(214,158,194)","rgb(0,177,247)","rgb(255,241,121)","rgb(143,130,188)","rgb(180,218,189)");
    for(var i=0; i<data.length; i++){
        total += data[i];
    }

    for(var i=0; i<data.length; i++){
        angle = 360*(data[i] / total); //dosuu method
        drawFan(100,100,96,totalTilt,angle,color[i],color[i],can);
        totalTilt += angle;
    }
    //generateClip(100,100,100,30,can,0);
    return total;
}

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

  // graphCanvas.width=400;
  // graphCanvas.style.width=400;
  // setSector(graphCxt,centerX,centerY,graphR+2,0,animCnt,"#EEE");
  // graphCxt.clip();
  // for(i=0;i<itemCnt;i++){
  //   var sr=(i===0)?0:angleAry[i-1];
  //   var er =angleAry[i];
  //   setSector(graphCxt,centerX,centerY,graphR,sr,er,colAry[i]);
  // }
  // if(animCnt>animMaxCnt){
  //   clearInterval(timer);
  // }

// var timer = setInterval(maskAnim,10);
