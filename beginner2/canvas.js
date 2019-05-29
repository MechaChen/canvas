var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "#faa";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#afa";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "#aaf";
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#faf";
c.stroke();

//Arc / Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

for (let i = 0; i < 10; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle =
    "rgb(" +
    randomInt(0, 255) +
    "," +
    randomInt(0, 255) +
    "," +
    randomInt(0, 255) +
    ")";
  c.stroke();
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(randomInt(3, 10));
