
import html from 'choo/html'

import style from './style'

export default (text) => {
  return html`
    <span class=${style}>#${text}</span>
  `
}

