
import html from 'choo/html'

import style from './style'

export default (state, emit, content) => {
  return html`
    <main class=${style}>${content}</main>
  `
}

