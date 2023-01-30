// index.js - the meat of the app

import m from "mithril"
import About from "./about"
import Credits from "./credits"
import { inject } from '@vercel/analytics'

inject();

// == Constants ==
const NUMBER_CHECKBOXES_IN_ONE_ROW = 10
// Checkbox difficulty (aka the amount of checkboxes for each difficulty)
const CHECKBOX_DIFF = [10, 20, 50, 100, 250, 500, 1000]
const FOOTER_SEPERATOR = m("span", " / ")

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
  startTime: undefined,
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
  time: () => {
    if (timer.startTime)
      return timer.msToTime(Date.now() - timer.startTime)
  },
}

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
        timer.startTime = undefined
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

// Results section
const Results = () => {
  // Only activate the timer if and only if:
  // - One or more checkboxes has been ticked
  // - The time hasn't been activated already
  if (countTickedCheckboxes() && !timer.startTime)
    timer.startTimer()

  if (!(countTickedCheckboxes() - state.checkbox_diff) & state.checkbox_diff !== 0)
    return m(".results", [
      m("b", "Results:"),
      m("p.timer", `Time: ${timer.time()}`)
    ])
  else return m(".results", "The results will appear at here after you have finished the game")
}

// The footer that contains things
const Footer = () => {
  return m("footer", [
    m("a", { href: "#!/about" }, "About"), FOOTER_SEPERATOR,
    m("a", { href: "#!/credits" }, "Credits"), FOOTER_SEPERATOR,
    m("a", { href: "mailto:tsukii@disroot.org" }, "Contact"),
  ])
}

// The driver code
const Main = () => {
  // Generate the checkbox list beforehand
  generateCheckboxes(state.checkbox_diff)

  return {
    view: () => m("main", m("pre", [
      m("p.header", `
 _   _      _    
| |_(_) ___| | __
| __| |/ __| |/ /
| |_| | (__|   < 
\\__|_|\\___|_|\\_\\
        `),
      m("b.desc", "How fast can you tick checkboxes?"), m("br"), m("br"),
      m("b.diff-btn-desc", "Checkbox:"), m("br"), m("br"),
      generateButtonCheckboxDifficulty(), m("br"), m("br"),
      m("hr"),
      m("span.current-box", `${countTickedCheckboxes()}/${state.checkbox_diff}`),
      m("br"), m("br"),
      m(".checkbox-grid", state.checkbox_lst), m("br"), m("br"),
      m("hr"),
      Results(),
      Footer(),
    ]))
  }
}

m.route(document.body, "/", {
  "/": Main,
  "/about": About,
  "/credits": Credits,
})
