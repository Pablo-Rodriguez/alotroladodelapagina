
import {css} from 'emotion'

import g from '../../css-variables'
import {desktop, phablet} from '../../media-queries'

export default css`
  display: block;
  padding: 1em;
  text-align: center;

  > img {
    width: 40vw;
    min-width: 150px;
    max-width: 200px;
    border-radius: 200px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, .65);
    margin: 1em auto 2em auto;
    vertical-align: top;
  }

  > div {
    color: ${g['dark-color']};
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    border: 2px solid ${g['dark-color']};
    border-radius: 5px;
    padding: 1em;
    > h2 {
      font-size: 25px;
      margin-bottom: .5em;
    }

    > div {
      text-align: justify;
      text-indent: 2em;
      > p {
        margin-bottom: 1em;
      }
      > p:last-child {
        margin-bottom: 0;
      }
      a {
        color: ${g['secondary-color']};
        text-decoration: underline;
      }
      b {
        color: ${g['secondary-color']};
      }
    }
  }

  ${phablet} {
    > img {
      max-width: 300px;
    }
  }

  ${desktop} {
    padding: 100px 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    > img {
      flex: 1.5;
      margin: 4em;
      max-width: 300px;
      border-radius: 300px;
    }
    > div {
      flex: 1;
      > h2 {
        font-size: 30px;
      }
      > div {
        font-size: 18px;
      }
    }
  }
`

