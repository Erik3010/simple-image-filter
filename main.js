let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height;

let imageNameTemp = document.getElementById('image'),
    filterNameTemp = document.getElementById('filter');

let imageName = '1.jpg', 
    filterName;

drawBg();

function changeValue() {
    imageName = imageNameTemp.value;
    filterName = filterNameTemp.value;

    drawPhoto();
    addFilter(filterName);
}   

function drawBg() {
    ctx.beginPath();
    ctx.rect(0,0,w,h);
    ctx.fillStyle="green";
    ctx.fill();
    ctx.closePath();
}

function drawPhoto() {
    let photo = new Image();
    photo.crossOrigin = 'Anonymous';
    photo.src = imageName;
    photo.onload = function() {
        ctx.drawImage(photo, 10,10, 210, 270);
    }
}

drawPhoto();

function addFilter(filter) {
    setTimeout(function() {
        let imageData = ctx.getImageData(10,10,210,270);
        
        let pixel = imageData.data;
    
        if(filter == "darken") {
            grayscale(pixel);
        }else if(filter == "lighten") {
            lighten(pixel, 100);
        }else if(filter == "" || filter  == null) {
            noFilter(pixel);
        }
    
        // ? draw back the pixel
        ctx.putImageData(imageData, 230, 10);
    
    }, 0)
}

function noFilter(pixel) {
    return pixel;
}

function grayscale(pixel) {
    for(let i=0;i<pixel.length;i+=4) {
        let avg = (pixel[i] + pixel[i+1] + pixel[i+2]) / 3;
        pixel[i] = avg;
        pixel[i+1] = avg;
        pixel[i+2] = avg;
    }
    return pixel;
}

function lighten(pixel, adjustment) {
    for(let i=0;i<pixel.length;i+=4) {
        pixel[i] += adjustment;
        pixel[i+1] += adjustment;
        pixel[i+2] += adjustment;
    }
    return pixel;
}