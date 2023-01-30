// == checkbox.js - responsible for all things checkbox-related ==

const NUMBER_CHECKBOXES_IN_ONE_ROW = 10
// Checkbox difficulty (aka the amount of checkboxes for each difficulty)
const CHECKBOX_DIFF = [10, 20, 50, 100, 250, 500, 1000]

// Display the number with random sign
// https://checkboxrace.com/script.js
const randomPosOrNeg = (number) => {
  const posOrNeg = Math.random() < 0.5 ? -1 : 1
  return Math.min(Math.random() * number, window.innerWidth - 500) * posOrNeg;
}

// Generate checkboxes and the state for the difficulty given
const generateCheckboxes = (num) => {
  if (num === 0) return
  // Generate a checkbox and pushed it to the checkbox element list
  const generateCheckbox = i => {
    state.checkbox_lst.push(
      m("input", {
        "type": "checkbox",
        "class": `checkbox`,
        "style": `transform: translateX(${randomPosOrNeg(i)}px)`,
        "onclick": () => {
          state.checkboxes[i] = !state.checkboxes[i]
          //console.log(`Checkbox number ${i} has been ticked!`)
        }
      })
    )
  }
  // Reset the state checkbox array and the checkbox list when 
  // calling the function to switch to another difficulty without
  // leftover ticks
  state.checkboxes = []
  state.checkbox_lst = state.checkbox_lst.fill(null)
  // Generate the checkbox elements
  for (let i = 0; i < num; i++) {
    if (i !== 0 && i % NUMBER_CHECKBOXES_IN_ONE_ROW == 0) {
      state.checkbox_lst.push(m("br"))
      generateCheckbox(i)
    }
    else generateCheckbox(i)
  }
  // Filter out nulls in the state array
  state.checkboxes = state.checkboxes.filter(n => n)
  //console.log(`Generated ${num} checkboxes`)
}

// Generate buttons that indicate checkbox difficulty
const generateButtonCheckboxDifficulty = () => {
  return CHECKBOX_DIFF.map(
    x => m("button", {
      "onclick": () => {
        timer.startTimer = undefined
        state.checkbox_diff = x
        generateCheckboxes(state.checkbox_diff)
      },
      "class": `diff-btn`
    }, x)
  )
}

// Count the number of ticked checkboxes
const countTickedCheckboxes = () => {
  console.log(state.checkboxes)
  return state.checkboxes.filter(x => x).length
}

export { generateCheckboxes, generateButtonCheckboxDifficulty, countTickedCheckboxes }
