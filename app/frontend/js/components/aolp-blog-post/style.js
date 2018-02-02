
import {css} from 'emotion'

import g from '../../css-variables'

export default css`
  display: block;
  background-color: #fff;
  padding-right: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  border: 2px solid ${g['dark-color']};
  border-radius: 5px;
  margin: 1em auto;
  margin-bottom: 2em;
  max-width: 1000px;
  > header {
    display: block;
    padding: 2em 2em 1em 2em;
    align-items: center;
    > h2 {
      cursor: pointer;
      color: ${g['dark--color']};
      font-size: 30px;
      text-align: justify;
      &:hover {
        color: ${g['secondary-color']};
      }
    }
    > h5 {
      display: block;
      font-size: 16px;
      text-align: right;
      color: ${g['secondary-color']};
    }
  }
  > footer {
    display: block;
    padding: 1em;
  }
`

