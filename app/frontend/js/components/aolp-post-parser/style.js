
import {css} from 'emotion'

import g from '../../css-variables'
import {desktop} from '../../media-queries'
import stars from '../aolp-stars/style'

export default css`
  display: block;
  text-align: justify;
  font-size: 18px;
  color: ${g['dark-color']};
  .primary-color {
    color: ${g['primary-color']};
  }
  .secondary-color {
    color: ${g['secondary-color']};
  }
  .dark-color {
    color: ${g['dark-color']};
  }
  .light-color {
    color: ${g['light-color']};
  }
  h1, h2, h3 {
    padding: 1em 0;
    margin: 0 auto;
    text-align: center;
  }
  p, blockquote {
    padding: 0 1em;
    text-indent: 1.5em;
    margin-bottom: 1em;
  }
  blockquote {
    color: ${g['primary-color']};
    font-size: 1.2em;
    padding: 0 1.2em;
  }
  b {
    color: ${g['primary-color']};
  }
  i {
    color: #aaa;
  }
  a {
    color: ${g['secondary-color']};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  > img {
    display: block;
    width: 100%;
    margin-bottom: 1.5em;
  }
  .side-image {
    display: block;
    margin-bottom: 1em;
    img {
      width: 100%;
    }
    * {
      margin-bottom: 1em;
    }
  }
  .left-text {
    text-align: left;
  }
  .center-text {
    text-align: center;
  }
  .justify-text {
    text-align: justify;
  }
  .right-text {
    text-align: right;
  }
  .ptop05 {
    padding-top: 0.5em;
  }
  .ptop {
    padding-top: 1em;
  }
  .ptop15 {
    padding-top: 1.5em;
  }
  .ptop2 {
    padding-top: 2em;
  }
  .pbottom05 {
    padding-bottom: 0.5em;
  }
  .pbottom {
    padding-bottom: 1em;
  }
  .pbottom15 {
    padding-bottom: 1.5em;
  }
  .pbottom2 {
    padding-bottom: 2em;
  }
  .pright05 {
    padding-right: 0.5em;
  }
  .pright {
    padding-right: 1em;
  }
  .pright15 {
    padding-right: 1.5em;
  }
  .pright2 {
    padding-right: 2em;
  }
  .pleft05 {
    padding-left: 0.5em;
  }
  .pleft {
    padding-left: 1em;
  }
  .pleft15 {
    padding-left: 1.5em;
  }
  .pleft2 {
    padding-left: 2em;
  }
  .font-tiny {
    font-size: 0.25em;
  }
  .font-small {
    font-size: 0.5em;
  }
  .font-normal {
    font-size: 1em;
  }
  .font-big {
    font-size: 2em;
  }
  .font-ultra {
    font-size: 4em;
  }
  .indent-none {
    text-indent: 0;
  }
  .word-break {
    word-break: break-all;
  }

  .${stars} {
    display: inline-block;
  }

  ${desktop} {
    p, blockquote {
      padding: 0 2em;
      text-indent: 3em;
    }
    blockquote {
      padding: 0 4em;
    }
    .side-image {
      display: flex;
      padding: 0;
      img {
        vertical-align: top;
        padding: 0;
      }
    }
  }
`

