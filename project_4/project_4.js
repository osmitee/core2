// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');


// const canvasOffsetX = canvas.offsetLeft;
// const canvasOffsetY = canvas.offsetTop;

// canvas.width = window.innerWidth - canvasOffsetX;
// canvas.height = window.innerHeight - canvasOffsetY;

// let isPainting = false;
// let lineWidth = 5;
// let startX;
// let startY;

// stationery.addEventListener('click', e => {
//     if (e.target.id === 'clear') {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }
// });

// stationery.addEventListener('change', e => {
//     if(e.target.id === 'stroke') {
//         ctx.strokeStyle = e.target.value;
//     }

//     if(e.target.id === 'lineWidth') {
//         lineWidth = e.target.value;
//     }
    
// });

// const draw = (e) => {
//     if (!isPainting) {
//         return;
//     };

//     ctx.lineWidth = lineWidth;
//     ctx.lineCap = 'round';

//     ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
//     ctx.stroke();
// };

// canvas.addEventListener('mousedown', (e) => {
//     isPainting = true;
//     startX = e.clientX;
//     startY = e.clientY;
// });

// canvas.addEventListener('mouseup', e => {
//     isPainting = false;
//     ctx.stroke();
//     ctx.beginPath();
// });

// canvas.addEventListener('mousemove', draw);

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
const stationery = document.getElementById('stationery');
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

stationery.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

stationery.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

document.addEventListener('contextmenu', event => event.preventDefault());

var isPlaying = false;

window.addEventListener('keydown', function (e) {
    const music = document.getElementById('audio');
    if (e.keyCode == 77) {
        if (isPlaying) {
            music.pause();
            console.log('pause');
        } else {
            music.play();
            console.log('play');
        }
        isPlaying = !isPlaying; // if true equal false, if false equal true
    }
});

function musicbox() {
    const sparkle = document.getElementById('sparkle');
        sparkle.play();
        console.log('play');
};