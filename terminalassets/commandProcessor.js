// commandProcessor.js

const registeredCommands = {};

function registerCommand(name, description, handler) {
  registeredCommands[name] = { description, handler };
}

function executeCommand(command) {
  const [cmdName, ...args] = command.split(' ');
  const cmd = registeredCommands[cmdName];
  if (cmd) {
    return cmd.handler(args);
  } else {
    return `Command not found: ${cmdName}`;
  }
}

export { registerCommand, executeCommand };
