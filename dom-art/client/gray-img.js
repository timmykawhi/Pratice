function addLoadEvent(fun) {
    if (typeof window.onload !== 'function') {
        window.onload = fun;
        return;
    }
    window.onload = function () {
        window.onload();
        fun();
    }
}

function bindEvent() {
    var translateBtn = document.querySelector('.translate-btn');
    translateBtn.addEventListener('click', translateGrayScale);
}

function translateGrayScale() {
    console.log('translateGrayScale');
    var canvas = document.getElementById('grayScaleImg');
    var originImg = document.querySelector('.original-img');
    canvas.width = originImg.width;
    canvas.height = originImg.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(originImg, 0, 0);
    var c = ctx.getImageData(0, 0, originImg.width, originImg.height);
    var width = c.width;
    var height = c.height;
    var data = c.data
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            var x = (i * 4) * width + j * 4;
            var r = data[x];
            var g = data[x + 1];
            var b = data[x + 2];
            data[x] = data[x + 1] = data[x + 2] = (r + g + b) / 3;
        }
    }
    ctx.putImageData(c, 0, 0, 0, 0, width, height);
}

addLoadEvent(bindEvent);