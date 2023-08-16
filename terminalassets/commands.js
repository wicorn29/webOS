// commands.js

const commands = {
  // ...other commands

  download: function(args) {
    if (!args) {
      return "Usage: download <url>";
    }

    const link = document.createElement('a');
    link.href = args;
    link.download = args.split('/').pop(); // Get the filename from the URL
    link.target = '_blank';
    link.click();

    return `Downloading from ${args}...`;
  }
};
