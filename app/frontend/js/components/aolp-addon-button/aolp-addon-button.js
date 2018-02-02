
import html from 'choo/html'

import {default as style, iconStyles, textStyles} from './style'

export default (linkText, link, {icon, text = '', type = ''}) => {
  const span = !!icon ?
    html`<span class="${iconStyles} ${icon}"></span>` :
    html`<span class="${textStyles}">${text}</span>`
  return html`
    <div class="${style} ${type}">
      ${span}
      <a href="${link}">${linkText}</a>
    </div>
  `
}

