
import {css} from 'emotion'

import g from '../../css-variables'

export default css`
  display: block;
  > span {
    color: ${g['ui-star-void-color']};
  }

  > .star {
    color: ${g['ui-star-fill-color']};
  }
`

