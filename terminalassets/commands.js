const commands = {
  help: () => {
    const availableCommands = Object.keys(commands).join(', ');
    return `Available commands: ${availableCommands}`;
  },
  about: 'This is your simple web-based OS terminal.'
  // ... other commands ...
};
