import m from "mithril"

const ABOUT_SECTION = `
_Tick!_ is a little web game where you have to tick checkboxes as quickly as possible.

Features:
- Various "Checkbox" difficulties (10/20/50/100/250/500/1000)
- Timer
- Large, randomly placed checkboxes
- Disabled ticked checkboxes (to prevent tragedy)

Notes:
- On some occasion, checkboxes can be aligned to each other, resulting in you having to tick on the same position
more than once

Credits:
- Built by Dang Hoang Tuan[0]. An open source[1] web game from Vietnam.
- Takes influence from a discussion[2] on the Jimmyhere Discord server.
- This game uses Mithril[3] and ESBuild[4] for development

[0]: https://tsk.bearblog.dev
[1]: https://github.com/HoangTuan110/tick
[2]: 
[3]: https://mithril.js.org
[4]: https://esbuild.github.io
`

const About = () => {
  return {
    view: () => {
      return m("main", m("pre", [
        m("b.header", "About"),
        m("p", ABOUT_SECTION)
      ]))
    }
  }
}

export default About
