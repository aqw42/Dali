$(function draw() {
    var canvas = document.getElementById("draw");
    if (canvas.getContext) {
        cxt = canvas.getContext("2d");
        img = document.getElementById("src");
        cxt.drawImage(img, 0, 0, 300, 300);
    }
    init();
});

$(".bottle2").one("mouseover", function () {
    $(".bottle2").addClass("bottle-fall");
    window.setTimeout(function () {
        $(".bottle2").removeClass("bottle-stand");
    }, 1000);
    
});

$("#download").click(function () {
    var canvas = document.getElementById('draw');
    var img = canvas.toDataURL("image/png");
    window.open(img, '_blank');
});


var canvas, ctx, flag_in_canvas = false, flag_pressed = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0;

function init() {
    canvas = document.getElementById('draw');
    ctx = canvas.getContext("2d");

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

function draw_() {
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
            draw_();
        }
    }
}