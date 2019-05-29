const canvas = document.querySelector("canvas");

fitDocumentSize();

function fitDocumentSize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

const c = canvas.getContext("2d");

c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
