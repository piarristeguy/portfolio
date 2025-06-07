const buttons = document.querySelectorAll('.float-button');
const speed = 0.7;

// Inicializar cada botón con una posición y velocidad aleatoria
const elements = Array.from(buttons).map(button => {
  const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
  const pos = {
    x: edge === 1 ? window.innerWidth - 100 : edge === 3 ? 0 : Math.random() * (window.innerWidth - 100),
    y: edge === 0 ? 0 : edge === 2 ? window.innerHeight - 40 : Math.random() * (window.innerHeight - 40)
  };
  const vel = {
    x: (Math.random() - 0.5) * speed,
    y: (Math.random() - 0.5) * speed
  };
  return { el: button, pos, vel };
});

function animate() {
  elements.forEach(item => {
    item.pos.x += item.vel.x;
    item.pos.y += item.vel.y;



const elWidth = item.el.offsetWidth;
const elHeight = item.el.offsetHeight;

// Contención en los bordes con base en el tamaño real
if (item.pos.x < 0) {
  item.pos.x = 0;
  item.vel.x *= -1;
}
if (item.pos.x > window.innerWidth - elWidth) {
  item.pos.x = window.innerWidth - elWidth;
  item.vel.x *= -1;
}
if (item.pos.y < 0) {
  item.pos.y = 0;
  item.vel.y *= -1;
}
if (item.pos.y > window.innerHeight - elHeight) {
  item.pos.y = window.innerHeight - elHeight;
  item.vel.y *= -1;
}


    // Evita el centro (zona libre interior)
    const buffer = 150;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    if (
      item.pos.x > centerX - buffer &&
      item.pos.x < centerX + buffer &&
      item.pos.y > centerY - buffer &&
      item.pos.y < centerY + buffer
    ) {
      item.vel.x *= -1;
      item.vel.y *= -1;
    }

    item.el.style.left = item.pos.x + 'px';
    item.el.style.top = item.pos.y + 'px';
  });

  requestAnimationFrame(animate);
}

animate();
