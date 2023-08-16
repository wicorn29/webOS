const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = inputElement.value;
    executeCommand(command);
    inputElement.value = '';
  }
});

function executeCommand(command) {
  const response = runCommand(command); // Replace with your command processing logic
  if (typeof response === 'function') {
    const functionResponse = response();
    outputElement.textContent += `\n> ${command}\n${functionResponse}\n`;
  } else {
    outputElement.textContent += `\n> ${command}\n${response}\n`;
  }
  outputElement.scrollTop = outputElement.scrollHeight;
}
