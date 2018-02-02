
import {css} from 'emotion'

import g from '../../css-variables'

export default css`
  display: inline-block;
  cursor: pointer;
  background-color: ${g['secondary-color']};
  color: white;
  padding: .4em;
  margin: .3em .4em;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  }
`

