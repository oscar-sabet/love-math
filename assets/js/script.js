document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByTagName('button')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'submit') {
        alert('You clicked Submit!')
      } else {
        let gameType = this.getAttribute('data-type')
        runGame(gameType)
      }
    })
  }
  runGame('addition')
})
/**
 * The Main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 * @[gameType] {string} gameType - The type of game being played
 */
function runGame (gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1
  let num2 = Math.floor(Math.random() * 25) + 1

  if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2)
  } else {
    alert(`Unknown game type: ${gameType}`)
    throw `Unknown game type: ${gameType}. Aborting!`
  }
}

/**
 *
 *
 */
function checkAnswer () {
  pass
}
function calculateCorrectAnswer () {
  pass
}
function incrementScore () {
  pass
}
function incrementWrongAnswer () {
  pass
}
function displayAdditionQuestion (operand1, operand2) {
  document.getElementById('operand1').textContent = operand1
  document.getElementById('operand2').textContent = operand2
  document.getElementById('operator').textContent = '+'
}
function displaySubtractQuestion () {
  pass
}
function displayMultiplyQuestion () {
  pass
}
