$(function draw() {
    var canvas = document.getElementById("img");
    if (canvas.getContext) {
        cxt = canvas.getContext("2d");
        img = document.getElementById("src");
        cxt.drawImage(img, 0, 0, 300, 300);
    }
	init();

});

var canvas, ctx, flag_in_canvas = false, flag_pressed = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0;

function init() {
    canvas = document.getElementById('draw');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;
    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
    canvas.addEventListener("mouseenter", function (e) {
        findxy('in', e)
    }, false);
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
	ctx.closePath();
}
function findxy(res, e) {
    if (res == 'down') {
        currX = e.clientX - 600;
        currY = e.clientY - 230;
        prevX = currX;
        prevY = currY;
        flag_pressed = true;
    }
    if (res == 'up') {
        flag_pressed = false;
    }
    if (res == "in") {
        currX = e.clientX - 600;
        currY = e.clientY - 230;
        prevX = currX;
        prevY = currY;
        flag_in_canvas = true;
    }
    if (res == "out") {
        flag_in_canvas = false;
    }
    if (res == 'move') {
        if (flag_in_canvas && flag_pressed) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - 600;
            currY = e.clientY - 230;
            draw();
        }
    }
}