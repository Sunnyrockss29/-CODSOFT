const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")
let currentInput = ""

function updateDisplay(value) {
  display.value = value
}

function calculate() {
  try {
    currentInput = eval(display.value).toString()
    updateDisplay(currentInput)
  } catch {
    updateDisplay("Error")
    currentInput = ""
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent
    if (value === "C") {
      currentInput = ""
      updateDisplay("")
    } else if (value === "=") {
      calculate()
    } else {
      currentInput += value
      updateDisplay(currentInput)
    }
  })
})

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    calculate()
  } else if (e.key.toLowerCase() === "c") {
    currentInput = ""
    updateDisplay("")
  }
})
