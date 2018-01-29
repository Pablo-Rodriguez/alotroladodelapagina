
import {html, Component, tag, styles} from '../component'

import style from './style'

@tag('aolp-header')
@styles(style)
export default class Header extends Component {
  render () {
    return html`
      <header>
        <h1>Al otro lado de la página</h1>
      </header>
    `
  }
}

