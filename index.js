import m from "mithril"

// == Constants ==
const r = document.body
const NUMBER_CHECKBOXES_IN_ONE_ROW = 10
// Checkbox difficulty (aka the amount of checkboxes for each difficulty)
const CHECKBOX_DIFF = [10, 20, 50, 250, 500, 1000]

// == State ==
var state = {
  // The state of each checkboxes in a game. Depends on the number of checkboies generated
  checkboxes: [],
  // The amount of checkboxes that the user wants to tick (aka difficulty)
  checkbox_diff: 0,
  // The list of checkbox elements
  checkbox_lst: [],
}

// == Time state ==
var timer = {
  startTime: 0, time: "",
  startTimer: () => timer.startTime = Date.now(),
  // https://checkboxrace.com/script.js
  // Convert milliseconds to nicely formatted time
  msToTime: (duration) => {
    var milliseconds = parseInt((duration % 1000) / 10)
        .toString()
        .padStart(2, "0"),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    return minutes + ":" + seconds + ":" + milliseconds
  },
  tick: () => timer.time = timer.msToTime(Date.now() - timer.startTime),
  // Timer update interval (for easy clearing)
  timeInterval: setInterval(() => {
    if (timer.startTime) {
      timer.tick()
      m.redraw()
    }
  }, 10),
}

// Generate checkboxes and the state for the difficulty given
const generateCheckboxes = (num) => {
  if (num === 0) return
  // Generate a checkbox and pushed it to the checkbox element list
  const generateCheckbox = i => {
    state.checkbox_lst.push(
      m("input", {
        "type": "checkbox",
        "class": `box-${i}`,
        "onclick": () => {
          state.checkboxes[i] = true
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
        // Assign the new checkbox difficulty and also re-generate the
        // checkbox list for the new difficulty
        state.checkbox_diff = x
        generateCheckboxes(state.checkbox_diff)
      },
      "class": `diff-btn-${x}`
    }, x)
  )
}

// Count the number of ticked checkboxes
const countTickedCheckboxes = () => {
  console.log(state.checkboxes)
  return state.checkboxes.filter(x => x).length
}

// Handle timer operations
const handleTimer = () => {
  // Only activate the timer if and only if:
  // - One or more checkboxes has been ticked
  // - The time hasn't been activated already
  if (countTickedCheckboxes() && !timer.startTime)
    timer.startTimer()
  // Deactive the timer when the game ends
  if (countTickedCheckboxes() === state.checkbox_diff && state.checkbox_diff && timer.startTime)
    clearInterval(timer.timeInterval)
}

// Timer component
const Timer = () => {
  handleTimer()
  return m("span.timer", `Time: ${timer.time || "00:00:00"}`)
}

// The driver code
const Main = () => {
  // Generate the checkbox list beforehand
  generateCheckboxes(state.checkbox_diff)

  return {
    view: () => m("main", m("pre", [
      m("b.header", "How fast can you tick checkboxes?"), m("br"), m("br"),
      generateButtonCheckboxDifficulty(), m("br"), m("br"),
      m("hr"),
      m("span.current-box", `${countTickedCheckboxes()}/${state.checkbox_diff} | `),
      Timer(),
      m("br"), m("br"),
      m(".checkbox-grid", state.checkbox_lst), m("br"),
    ]))
  }
}

m.route(r, "/", {
  "/": Main
})
