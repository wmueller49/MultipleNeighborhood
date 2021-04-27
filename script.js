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
    var a = window.setInterval(function() { changePixels() }, 100); 
}

function changePixels(){
    var canvas = document.getElementById('simCanvas');
    var context = canvas.getContext('2d');
    var imgData = context.getImageData(0, 0, w, h);
    var pix = imgData.data;

    for (var i = 0, n = pix.length; i < n; i += 4) {
        ring1 = 0;

        //right
        if(i + 4 < n && pix[i+4] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        //left
        if(i - 4 > 0 && pix[i-4] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        //below
        if(i + w < n && pix[i + w] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        if(i + w + 4 < n && pix[i + w + 4] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        if(i + w - 4 < n && pix[i + w - 4] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        //above
        if(i- w > 0 && pix[i - w] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        if(i- w + 4 > 0 && pix[i - w + 4] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        if(i - w - 4 > 0 && pix[i - w - 4] >= 128){
            ring1 += 1;
        }
        else{
            ring1 -= 1;
        }

        if(ring1 >= 2){
            var c = pix[i] + 5;
            if(c > 256){
                pix[i] = 256;
                pix[i+1] = 256;
                pix[i+2] = 256;
            }
            else{
                pix[i] = c;
                pix[i+1] = c;
                pix[i+2] = c;
            }
        }
        else if(ring1 <= -2){
            var c = pix[i] - 5;
            if(c < 0){
                pix[i] = 0;
                pix[i+1] = 0;
                pix[i+2] = 0;
            }
            else{
                pix[i] = c;
                pix[i+1] = c;
                pix[i+2] = c;
            }
        }

        ring2 = 0;

        //right
        if(i + 12 < n && pix[i+12] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i + 12 + w < n && pix[i+12 + w] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i + 12 - w< n && pix[i+12-w] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        //left
        if(i - 12 > 0 && pix[i-12] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i - 12 + w> 0 && pix[i-12 + w] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i - 12 - w> 0 && pix[i-12 - w] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        //below
        if(i + 2*w < n && pix[i + 2*w] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i + 2*w + 8 < n && pix[i + 2*w + 8] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i + 2*w - 8 < n && pix[i + 2*w - 8] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        //above
        if(i - 2*w > 0 && pix[i - 2*w] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i - 2*w + 8 > 0 && pix[i - 2*w + 8] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(i - 2*w - 8 > 0 && pix[i - 2*w - 8] >= 128){
            ring2 += 1;
        }
        else{
            ring2 -= 1;
        }

        if(ring2 >= 3){
            var c = pix[i] + 15;
            if(c > 256){
                pix[i] = 256;
                pix[i+1] = 256;
                pix[i+2] = 256;
            }
            else{
                pix[i] = c;
                pix[i+1] = c;
                pix[i+2] = c;
            }
        }
        else if(ring2 >= 1){
            var c = pix[i] + 5;
            if(c > 256){
                pix[i] = 256;
                pix[i+1] = 256;
                pix[i+2] = 256;
            }
            else{
                pix[i] = c;
                pix[i+1] = c;
                pix[i+2] = c;
            }
        }
        else if(ring2 <= -3){
            var c = pix[i] - 15;
            if(c < 0){
                pix[i] = 0;
                pix[i+1] = 0;
                pix[i+2] = 0;
            }
            else{
                pix[i] = c;
                pix[i+1] = c;
                pix[i+2] = c;
            }
        }
        else if(ring2 <= -1){
            var c = pix[i] - 5;
            if(c < 0){
                pix[i] = 0;
                pix[i+1] = 0;
                pix[i+2] = 0;
            }
            else{
                pix[i] = c;
                pix[i+1] = c;
                pix[i+2] = c;
            }
        }
    }
    
    context.putImageData(imgData, 0, 0);
}



