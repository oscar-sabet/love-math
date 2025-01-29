document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByTagName('button')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'submit') {
        alert('You clicked Submit!')
      } else {
        let gameType = this.getAttribute('data-type')
        alert(`You clicked ${gameType}`)
      }
    })
  }
})

function runGame () {
  let num1 = Math.floor(Math.random() * 25) + 1
  let num2 = Math.floor(Math.random() * 25) + 1
}
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
function displayAdditionQuestion () {
  pass
}
function displaySubtractQuestion () {
  pass
}
function displayMultiplyQuestion () {
  pass
}
