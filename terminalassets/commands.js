function runCommand(command) {
  const commands = {
    help: 'Available commands: help, about',
    about: 'This is your simple web-based OS terminal.'
  };

  const response = commands[command] || `Command not found: ${command}`;
  return response;
}
