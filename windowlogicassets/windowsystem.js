const windows = document.querySelectorAll('.window');

windows.forEach((window) => {
  const titleBar = window.querySelector('.title-bar');
  const closeButton = window.querySelector('.close-button');

  let isDragging = false;
  let dragStartX, dragStartY;

  titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX - window.getBoundingClientRect().left;
    dragStartY = e.clientY - window.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    window.style.left = `${e.clientX - dragStartX}px`;
    window.style.top = `${e.clientY - dragStartY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  closeButton.addEventListener('click', () => {
    window.remove();
  });
});
