(function() {
  
})();


window.onload = function() {
 const canvas = document.getElementById('game');
 const image = document.getElementById('image');
  let context = canvas.getContext('2d')
  const wWidth = window.innerWidth - 10;
  const wHeight = window.innerHeight - 10;
  let tileWidth = 60;
  let tileHeight = 30;

  canvas.width = wWidth;
  canvas.height = wHeight;
  
  context.translate(wWidth / 2, 50);

  let img = document.createElement('img');
  img.addEventListener('load', () => draw());

  img.src= image.src;

  function draw() {
    for( var x = 0; x < 100; x++) {
      for( var y = 0; y < 100; y++) {
        drawImageTile(x, y, Math.floor(Math.random() * 16));
        // drawBlock(x,y, Math.floor(Math.random() * 4));
      }    
    }
  }

  function drawImageTile(x,y,index) {
    context.save();
    context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2 + (index < 4 ? 5 : 0));

    context.drawImage(img, index * tileWidth, 0, tileWidth, img.height, -tileWidth / 2, 0, tileWidth, img.height)

    context.restore();
  }

  function drawBlock(x,y,z) {
    let top = '#eee';
    let right = '#ccc';
    let left = '#999';

    context.save();
    context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);

    // draw top
    context.beginPath();
    context.moveTo(0, -z * tileHeight);
    context.lineTo(tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.closePath();
    context.fillStyle = top;
    context.fill();
    // draw left
    context.beginPath();
    context.moveTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(0, tileHeight);
    context.lineTo(-tileWidth / 2, tileHeight / 2);
    context.closePath();
    context.fillStyle = left;
    context.fill();
    // draw right
    context.beginPath();
    context.moveTo(tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(0, tileHeight);
    context.lineTo(tileWidth / 2, tileHeight / 2);
    context.closePath();
    context.fillStyle = right;
    context.fill();

    context.restore();
  }

  function drawTile(x, y, color) {
    context.save();
    context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(tileWidth / 2, tileHeight / 2);
    context.lineTo(0, tileHeight);
    context.lineTo(-tileWidth / 2, tileHeight / 2);
    context.closePath();
    context.fillStyle = color;
    context.fill();

    context.restore();
  }
}