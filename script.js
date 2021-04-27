var w = 1200;
var h = 800;

function startPixels(){
    var canvas = document.getElementById('simCanvas');
    var context = canvas.getContext('2d');
    context.fillStyle = "white";
    context.fillRect(0, 0, w, h);

    var imgData = context.getImageData(0, 0, w, h);
    var pix = imgData.data;

    for (var i = 0, n = pix.length; i < n; i += 4) {
        var grayVal = Math.random() * 256;
        pix[i] = grayVal;
        pix[i+1] = grayVal;
        pix[i+2] = grayVal;
    }
    
    context.putImageData(imgData, 0, 0);
}

function changePixels(){
    var canvas = document.getElementById('simCanvas');
    var context = canvas.getContext('2d');

    context.fillStyle = "white";
    context.fillRect(0, 0, w, h);

    var imgData = context.getImageData(0, 0, w, h);
    var pix = imgData.data;

    for (var i = 0, n = pix.length; i < n; i += 4) {
        var grayVal = Math.random() * 256;
        pix[i] = grayVal;
        pix[i+1] = grayVal;
        pix[i+2] = grayVal;
    }
    
    context.putImageData(imgData, 0, 0);
}



