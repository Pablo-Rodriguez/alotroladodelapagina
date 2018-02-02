
import {css} from 'emotion'

import g from '../../css-variables'

export const iconStyles = css`
  padding: .5em;
  &:before {
    width: 100%;
    height: 100%;
  }
`

export const textStyles = css`
  height: 2em;
  width: 2em;
  line-height: 2em;
  text-align: center;
  font-weight: bold;
`

export default css`
  display: inline-block;
  font-size: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  vertical-align: top;
  span {
    display: inline-block;
    font-size: 16px;
    background-color: #333;
    color: white;
    box-sizing: border-box;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  a {
    box-sizing: border-box; 
    border: none;
    border-width: 0;
    font-size: 16px;
    color: white;
    background-color: #333;
    display: inline-block;
    vertical-align: top;
    height: 2em;
    line-height: 2em;
    padding: 0 .5em;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-weight: bold;
  }
  &.goodreads {
    span {
      border: 2px solid #6e3e0c;
      background-color: #EEEBDB;
      color: #6E3E0C;
      line-height: 1.6em;
    }
    a {
      color: #6E3E0C;
      background-color: #EEEBDB;
    }
  }
  &.twitter {
    span {
      color: ${g['dark-color']};
      background-color: white;
    }
    a {
      color: white;
      background-color: ${g['dark-color']};
    }
  }
`

