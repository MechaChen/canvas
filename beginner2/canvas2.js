const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext("2d");

c.fillStyle = "#faa";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#f66";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "#f22";
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#aaf";
c.stroke();

// Arc
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "#3aa";
c.stroke();

for (let i = 0; i < 100; i++) {
  const x = Math.random() * innerWidth;
  const y = Math.random() * innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
  c.stroke();
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
