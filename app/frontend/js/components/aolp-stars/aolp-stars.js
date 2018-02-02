
import html from 'choo/html'

import style from './style'

export default (value, max = 5) => {
  const arr = []
  for (let i = 0; i < max; i++) { arr.push(null) }
  return html`
    <div class=${style}>
      ${arr.map((v, i) => html`
        <span class="${i < value ? 'star' : ''}">★</span>
      `)}
    </div>
  `
}

