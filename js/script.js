const button = document.getElementById("button");
const word = document.getElementById("input");
const display = document.getElementById("resultss");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const wordValue = word.value;
  const nonDigitsOrLetters = /[\W_]/g;
  const lowRegStr = wordValue.toLowerCase().replace(nonDigitsOrLetters, '');
  const reverseStr = lowRegStr.split('').reverse().join('');

  display.style.color = 'yellow';

  if(reverseStr === lowRegStr && reverseStr.length > 2) {
    return display.innerHTML = `${wordValue} is a Palindrome!`;

  }
  else{
    return reverseStr.length < 3?display.innerHTML = 'Enter a word or number at least 3 characters long!':display.innerHTML = `${wordValue} is not a Palindrome!`;
  }
});

