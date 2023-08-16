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
