
import {css} from 'emotion'

import g from '../../css-variables'

export default css`
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  max-width: 1000px;
  margin: 0 auto;
  .side, .middle {
    background-color: ${g['dark-color']};
    border-radius: 200px;
    color: ${g['light-color']};
    box-shadow: 0 2px 3px rgba(0, 0, 0, .3);
  }
  .side {
    cursor: pointer;
    font-size: 170%;
    padding: .3em;
    width: 1em;
    height: 1em;
    text-align: center;
    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
    }
    &:active {
      box-shadow: 0 2px 1px rgba(0, 0, 0, .3);
    }
    span {
      display: block;
      margin-left: 3px;
    }
  }
  .rotated {
    span {
      margin-left: -5px;
      margin-top: 1px;
      transform: rotate(180deg);
    }
  }
  .middle {
    width: 15px;
    height: 15px;
  }
`

