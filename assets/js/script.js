document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'submit') {
        checkAnswer();
      } else {
        let gameType = this.getAttribute('data-type');
        runGame(gameType);
      }
    })
  }
  runGame('addition');
})
/**
 * The Main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 * @[gameType] {string} gameType - The type of game being played
 */
function runGame (gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1
  let num2 = Math.floor(Math.random() * 25) + 1

  switch (gameType) {
    case 'addition':
      displayAdditionQuestion(num1, num2);
      break
    case 'subtract':
      displaySubtractQuestion(num1, num2);
      break
    case 'multiply':
      displayMultiplyQuestion(num1, num2);
      break
    case 'division':
      displayDivisionQuestion(num1, num2);
      break
    default:
      alert(`Unknown game type: ${gameType}`);
      throw `Unknown game type: ${gameType}. Aborting!`;
  }

  // if (gameType === 'addition') {
  //   displayAdditionQuestion(num1, num2)
  // } else {
  //   alert(`Unknown game type: ${gameType}`)
  //   throw `Unknown game type: ${gameType}. Aborting!`
  // }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer () {
  let userAnswer = parseInt(document.getElementById('answer-box').value)
  let calculatedAnswer = calculateCorrectAnswer()
  let isCorrect = userAnswer === calculatedAnswer[0]

  if (isCorrect) {
    incrementScore()
    // alert('Hey! You got it right! :D')
  } else {
    incrementWrongAnswer()
    // alert(`Awwww....you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`)
  }

  runGame(calculatedAnswer[1])
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 *
 *@ returns {number} The correct answer to the question
 */
function calculateCorrectAnswer () {
  let operand1 = parseInt(document.getElementById('operand1').innerText)
  let operand2 = parseInt(document.getElementById('operand2').innerText)
  let operator = document.getElementById('operator').innerText

  switch (operator) {
    case '+':
      return [operand1 + operand2, 'addition']
    case '-':
      return [operand1 - operand2, 'subtract']
    case 'x':
      return [operand1 * operand2, 'multiply']
    case '/':
      return [operand1 / operand2, 'division']
    default:
      alert(`Unimplemented operator ${operator}`)
      throw `Unimplemented operator ${operator}. Aborting!`
  }
}
/**
 * Gets current score from dom and incs it by 1
 */
function incrementScore () {
  let oldScore = parseInt(document.getElementById('score').innerText)
  document.getElementById('score').innerText = ++oldScore
}

/**
 * Gets current incorrect tally from dom and incs it by 1
 */
function incrementWrongAnswer () {
  let oldScore = parseInt(document.getElementById('incorrect').innerText)
  document.getElementById('incorrect').innerText = ++oldScore
}

function displayAdditionQuestion (operand1, operand2) {
  document.getElementById('operand1').textContent = operand1
  document.getElementById('operand2').textContent = operand2
  document.getElementById('operator').textContent = '+'
}

function displaySubtractQuestion (operand1, operand2) {
  document.getElementById('operand1').textContent = operand1
  document.getElementById('operand2').textContent = operand2
  document.getElementById('operator').textContent = '-'
}

function displayMultiplyQuestion (operand1, operand2) {
  document.getElementById('operand1').textContent = operand1
  document.getElementById('operand2').textContent = operand2
  document.getElementById('operator').textContent = 'x'
}
