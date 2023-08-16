const commands = {
  help: function() {
    return 'Available commands: help, about, download';
  },

  about: function() {
    return 'This is your simple web-based OS terminal.';
  },

  download: function(args) {
    if (!args) {
      return 'Usage: download <url>';
    }

    const link = document.createElement('a');
    link.href = args;
    link.download = args.split('/').pop();
    link.target = '_blank';
    link.click();

    return `Downloading from ${args}...`;
  }
};
