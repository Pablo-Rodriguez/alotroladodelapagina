
import html from 'choo/html'

import style from './style'
import stars from '../aolp-stars/aolp-stars'

const operations = {
  stars
}

export default (text, emit) => {
  const section = document.createElement('section')
  section.classList.add(style)
  section.innerHTML = parseBody(text)
  return html`${section}`
}

function parseBody (text) {
  return text.replace(/\${{([^}]*)}}/g, (match, p1) => {
    const {command, params} = parseExpression(p1)
    if (typeof operations[command] === 'function') {
      return operations[command](...params).outerHTML
    } else {
      return match
    }
  })
}

function parseExpression (exp) {
  exp = exp.trim().split(')').join('').trim().split('(')
  const command = exp[0].trim().toLowerCase()
  const params = exp[1].trim().split(',').map(s => s.trim())
  return {command, params}
}

