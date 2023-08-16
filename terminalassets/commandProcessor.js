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

// commandProcessor.js

// ... (previous code)

function downloadFile(url) {
  // Logic to trigger file download from the provided URL
  const link = document.createElement('a');
  link.href = url;
  link.download = url.substring(url.lastIndexOf('/') + 1);
  link.click();
}

registerCommand('download', 'Download a file from URL', (args) => {
  if (args.length === 1) {
    downloadFile(args[0]);
    return 'Downloading file...';
  } else {
    return 'Usage: download <file_url>';
  }
});
