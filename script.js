
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeSwitchContainer = document.querySelector('.dark-mode-switch-container');
  const switchLabel = document.querySelector('.switch-label');
  const container = document.querySelector('.container');
  const resultBox = document.getElementById('result-box');
  const clearBtn = document.getElementById('clear');
  const totalBtn = document.getElementById('total');

  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');

    // Update switch label text
    switchLabel.textContent = darkModeToggle.checked ? 'Dark Mode' : 'Light Mode';
  }

  // Function to evaluate expressions
  function evaluateExpression() {
    resultBox.innerHTML = eval(resultBox.innerHTML);
  }

  // Function to clear the result box
  function clearResultBox() {
    resultBox.innerHTML = '0';
  }

  // Event listener for dark mode toggle
  darkModeToggle.addEventListener('change', toggleDarkMode);

  // Event listener to toggle dark mode when clicking on the switch label
  darkModeSwitchContainer.addEventListener('click', function () {
    darkModeToggle.checked = !darkModeToggle.checked;
    toggleDarkMode();
  });

  // Event listener for the total button
  totalBtn.addEventListener('click', evaluateExpression);

  // Event listener for the clear button
  clearBtn.addEventListener('click', clearResultBox);

  // Event listeners for number and operator buttons
  const numButtons = document.querySelectorAll('.num-button');
  numButtons.forEach(button => {
    button.addEventListener('click', function () {
      if (resultBox.innerHTML === '0') {
        resultBox.innerHTML = '';
      }
      resultBox.innerHTML += button.innerHTML;
    });
  });
});

