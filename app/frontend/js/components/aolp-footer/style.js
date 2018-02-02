
import {css} from 'emotion'

import g from '../../css-variables'
import {tablet} from '../../media-queries'

export default css`
  background-color: ${g['dark-color']};
  > div {
    display: block;
    font-size: 16px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 1em;
    padding: 1em;
    padding-top: 4em;
  
    > aside {
      margin-bottom: 1em;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }

    > div {
      aside, header {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        background-color: ${g['light-color']};
        padding: 1em;
        border-radius: 5px;
        margin-bottom: 1em;
      }

      aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        > * {
          margin: 16px 0;
        }
      }

      header {
        font-size: 2em;
        color: ${g['dark-color']};
      }
    }
  }
  > h5 {
    border-top: 1px solid ${g['light-color']};
    color: ${g['light-color']};
    text-align: center;
    padding: 2em;
    font-size: 16px;
    margin-top: 1em;
  }

  ${tablet} {
    > div {
      display: flex;
      > aside {
        flex: 2;
        margin: 0 1em;
      }
      > div {
        flex: 1;
        margin-bottom: 0 1em;
      }
    }
    > h5 {
      margin-top: 2em;
    }
  }
`

