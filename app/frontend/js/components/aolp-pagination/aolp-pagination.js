
import html from 'choo/html'

import {blog} from '../../stores/types'
import style from './style'

export default (props, emit) => {
  function back () {
    if (props.page > 0) {
      emit(blog.PAGE_BACK)
    }
  }

  function forward () {
    if (props.more) {
      emit(blog.PAGE_FORWARD)
    }
  }
  const left = html`<div class="side rotated" onclick=${back}>
    <span class="icon-arrow"></span>  
  </div>`
  const right = html`<div class="side" onclick=${forward}>
    <span class="icon-arrow"></span>
  </div>`
  left.style.visibility = props.page > 0 ? 'visible' : 'hidden'
  right.style.visibility = props.more ? 'visible' : 'hidden'

  return html`
    <div class=${style}>
      ${left}
      <div class="middle"></div>
      <div class="middle"></div>
      <div class="middle"></div>
      ${right}
    </div>
  `
}

