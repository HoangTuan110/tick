// index.js - the meat of the app

import m from "mithril"
import { generateCheckboxes, generateButtonCheckboxDifficulty, countTickedCheckboxes } from "./checkbox"
import { inject } from '@vercel/analytics';

inject();

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
    ]))
  }
}

m.route(document.body, "/", {
  "/": Main
})
