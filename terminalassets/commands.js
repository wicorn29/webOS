// commands.js

const commands = {
  // ...other commands

  echo: function(args) {
    return args;
  },

  clear: function() {
    outputElement.textContent = '';
    return 'Terminal cleared.';
  },

  date: function() {
    const now = new Date();
    return now.toLocaleString();
  }
};
