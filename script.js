let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height;

let imageW = 210,
    imageH = 270;

function drawBg() {
    ctx.rect(0,0,w,h);
    ctx.fillStyle = 'green';
    ctx.fill();
}

function changeImage() {
    let imageSelect = document.getElementById('image');
    let imageVal = imageSelect.options[imageSelect.selectedIndex].value;

    let filterSelect = document.getElementById('filter');
    let filterVal = filterSelect.options[filterSelect.selectedIndex].value;

    oriImage(imageVal, filterVal);

    console.log(filterVal);
}

function changeFilter() {
    let imageSelect = document.getElementById('image');
    let imageVal = imageSelect.options[imageSelect.selectedIndex].value;

    let filterSelect = document.getElementById('filter');
    let filterVal = filterSelect.options[filterSelect.selectedIndex].value;
    console.log(filterVal)

    oriImage(imageVal, filterVal);
    // filter(imageVal, filterVal)

}

function oriImage(img, filter) {
    let gbr = new Image();
    gbr.src = img;
    gbr.onload = function() {
        // Todo: gambar pertama
        ctx.drawImage(gbr, 10, 20, imageW, imageH);
        console.log(filter)

        // if(filter == "" || filter == undefined) return;

        function result() {
            let filterEff;
            if(filter == "darken") filterEff = 'brightness(0.4)';
            else if (filter == "lighten") filterEff = 'brightness(2)'

            ctx.filter = filterEff
            ctx.drawImage(gbr, 230, 20, imageW, imageH);
        }
        result();
        
    }

}

function filter(img, filter) {
    // let filterImg = new Image();
    // filterImg.src = img;
    // filterImg.onload = function() {
    //     ctx.drawImage(filterImg, 230, 20, imageW, imageH);
    //     ctx.filter = 'brightness(0.4)'
    // }
}

filter('1.jpg', 'asd')

window.onload = function() {
    drawBg();
    oriImage('1.jpg');
}


// function getPixel(img) {
    // let gbr = new Image();
    // gbr.src = img;
    // gbr.onload = function() {
    //     // Todo: gambar pertama
    //     ctx.filter = 'brightness(0.6)'
    //     ctx.drawImage(gbr, 10, 20, imageW, imageH);
    //     // ctx.drawImage(gbr, 0, 0, w, h);
    // }

    // let imageData = ctx.getImageData(10, 20, imageW, imageH)
    // let data = imageData.data;
    
    // function grayscale() {
    //     for(let i=0;i<data.length;i+=4) {
    //         let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    //         data[i] = avg;
    //         data[i + 1] = avg;
    //         data[i + 2] = avg;
    //     }
    //     ctx.putImageData(imageData, 230,20);
    // }

    // function brightness() {
    //     for(let i=0;i<data.length;i+=4) {
    //         data[i] += 40;
    //         data[i+1] += 40;
    //         data[i+2] += 40;  
    //     }
    //     ctx.putImageData(imageData, 230,20);
    // }

    // brightness();
// }