function createWindow(title, content) {
  const newWindow = document.createElement('div');
  newWindow.className = 'window';

  newWindow.innerHTML = `
    <div class="title-bar">
      <div class="title">${title}</div>
      <div class="close-button">X</div>
    </div>
    <div class="content">${content}</div>
  `;

  document.body.appendChild(newWindow);
}
