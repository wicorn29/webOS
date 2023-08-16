// terminal.js

import { executeCommand } from './commandProcessor';

const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = inputElement.value;
    const response = executeCommand(command);
    displayOutput(command, response);
    inputElement.value = '';
  }
});

function displayOutput(command, response) {
  outputElement.textContent += `\n> ${command}\n${response}\n`;
  outputElement.scrollTop = outputElement.scrollHeight;
}
