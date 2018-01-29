
base="./js/components/"

mkdir "$base$1"
echo "
import {html, Component, tag, styles} from '../component'

import style from './style'

@tag('aolp-app')
@styles(style)
export default class App extends Component {
  render () {
    return html\`
      
    \`
  }
}
" > "$base$1/$1.js"
echo "
export default (self) => \`
  :host {
    display: block;
  }
\`

" > "$base$1/style.js"
