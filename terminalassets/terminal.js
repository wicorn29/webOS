// terminal.js

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
