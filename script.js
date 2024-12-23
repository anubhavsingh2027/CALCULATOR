function appendValue(value) {
    const display = document.getElementById('result');
  
    if (value === '.' && display.value.includes('.')) {
      return;
    }
  
    if (value === '00' && display.value === '') {
      return;
    }
  
    display.value += value;
    adjustFontSize();
  }
  
  function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
    adjustFontSize();
  }
  
  function clearDisplay() {
    document.getElementById('result').value = '';
    adjustFontSize();
  }
  
  function calculate() {
    const display = document.getElementById('result');
    try {
      display.value = Function('return ' + display.value)();
    } catch (error) {
      display.value = 'Error';
    }
    adjustFontSize();
  }
  
  function adjustFontSize() {
    const display = document.getElementById('result');
    const valueLength = display.value.length;
  
    if (valueLength > 12) {
      display.style.fontSize = '1.5rem';
    } else if (valueLength > 8) {
      display.style.fontSize = '1.75rem';
    } else {
      display.style.fontSize = '2rem';
    }
  }
  