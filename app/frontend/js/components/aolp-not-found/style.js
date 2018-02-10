
import {css} from 'emotion'

import g from '../../css-variables'
import {desktop} from '../../media-queries'

export default css`
  display: block;
  padding: 1em;
  font-size: 25px;
  color: ${g['dark-color']};
  margin: 0 auto;
  text-align: center;
  max-width: 1000px;

  ${desktop} {
    padding: 4em 1em;
  }
`

