const image = document.querySelector('body');
document.addEventListener('mousemove', (e) => {
  const moveX = (e.pageX * -1 / 10);
  const moveY = (e.pageY * -1 / 10);
  image.style.backgroundPosition = `${moveX}px ${moveY}px`;
});