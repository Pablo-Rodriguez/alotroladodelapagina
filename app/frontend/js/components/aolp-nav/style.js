
import {css} from 'emotion'

import v from '../../css-variables'
import {tablet, desktop} from '../../media-queries'

export default css`
  display: flex;

  a {
    flex: 1;
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    
    span {
      flex: 1;
      display: block;
      text-align: center;
      white-space: nowrap;
      font-weight: bold;
      padding: 1em;
    }

    &:hover, &.selected {
      background: ${v['secondary-color']};
    }
  }

  ${tablet} {
    a {
      min-width: 150px;
      align-items: center;
      span {
        min-width: 100px;
        padding: 0;
        display: flex;
        justify-content: center;
      }
    }
  }

  ${desktop} {
    a {
      min-width: 300px;
    }
  }
`


