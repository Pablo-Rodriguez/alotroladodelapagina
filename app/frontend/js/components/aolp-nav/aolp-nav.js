
import html from 'choo/html'

import style from './style'

const links = [{
  text: 'Blog',
  route: '/?p=0&tag='
}, {
  text: 'About',
  route: '/about'
}]

export default (state, emit) => {
  let {route} = state
  route = route.startsWith('/') ? route : `/${route}`
  return html`
    <nav class=${style}>
      ${links.map(link => html`
        <a href="${link.route}" class="${route === link.route.split('?')[0] ? 'selected' : ''}">
          <span>${link.text}</span>
        </a>
      `)}
    </nav>
  `
}

