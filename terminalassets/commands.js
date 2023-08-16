function runCommand(command) {
  const args = command.split(' ');
  const commandName = args[0];
  
  if (commandName in commands) {
    const response = commands[commandName](args.slice(1));
    outputElement.textContent += `\n> ${command}\n${response}\n`;
  } else {
    outputElement.textContent += `\n> ${command}\nCommand not found: ${commandName}\n`;
  }
  
  outputElement.scrollTop = outputElement.scrollHeight;
}
