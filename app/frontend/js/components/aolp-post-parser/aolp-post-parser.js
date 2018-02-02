
import html from 'choo/html'

import style from './style'

export default (text, emit) => {
  const section = document.createElement('section')
  section.classList.add(style)
  section.innerHTML = parseBody(text)
  return html`${section}`
}

function parseBody (text) {
  return text
}

