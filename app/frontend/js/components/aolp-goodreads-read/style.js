
import {css} from 'emotion'

import g from '../../css-variables'
import {phablet} from '../../media-queries'

export default css`
  display: block;
  color: ${g['dark-color']};
  background-color: ${g['light-color']};
  border-radius: 5px;
  padding: 0 1em 1em 1em;

  > h3 {
    text-align: center;
    font-size: 24px;
    padding: 1em 0;
  }
`

export const bookStyle = css`
  display: block;
  border: 2px solid ${g['dark-color']};
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1em;
  > figure {
    margin: 0;
    padding: 0;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      font-size: 0px;
    }
  }
  > div {
    flex: 1;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > hgroup {
      > * {
        display: inline;
        margin-right: .5em;
      }
      > h4 {
        > a:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    > div {
      text-align: justify;
    }
  }

  ${phablet} {
    display: flex;
    > figure {
      width: 150px;
      height: auto;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
`

