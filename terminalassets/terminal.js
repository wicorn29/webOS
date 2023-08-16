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
  const args = command.split(' ');
  const cmd = args.shift().toLowerCase();

  if (commands.hasOwnProperty(cmd)) {
    const response = commands[cmd](args.join(' '));
    outputElement.textContent += `\n> ${command}\n${response}\n`;
    outputElement.scrollTop = outputElement.scrollHeight;
  } else {
    outputElement.textContent += `\n> ${command}\nCommand not found: ${cmd}\n`;
    outputElement.scrollTop = outputElement.scrollHeight;
  }
}
