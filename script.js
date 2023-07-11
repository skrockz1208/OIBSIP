let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function calculateResult() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}

function clearResult() {
  result.value = '';
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}
