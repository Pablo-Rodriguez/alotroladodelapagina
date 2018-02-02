
import {css} from 'emotion'

import g from '../../css-variables'
import {tablet} from '../../media-queries'

export default css`
  display: flex;
  flex-wrap: wrap;
  background: ${g['primary-color']};
  color: ${g['light-color']};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);

  h1 {
    flex-basis: 100%;
    font-size: 26px;
    margin: 0.75em;
    text-align: center;
  }

  nav {
    flex: 1;
  }

  ${tablet} {
    flex-wrap: nowrap;
    align-items: stretch;

    h1 {
      margin: 0.75em;
      margin-left: 1em;
      text-align: left;
    }
  }
`

