
import html from 'choo/html'

import {blog} from '../../stores/types'
import style from './style'
import tag from '../aolp-tag/aolp-tag'
import parser from '../aolp-post-parser/aolp-post-parser'

export default (props, emit) => {
  let {date, body, tags} = props
  let title = typeof props.link === 'string' ? html`
    <h2><a href="${props.link}">${props.title}</a></h2>
  ` : html`
    <h2>${props.title}</h2>`
  
  return html`
    <article class=${style}>
      <header>
        ${title}
        <h5>${computeDate(date)}</h5>
      </header>
      ${parser(body, emit)}
      <footer onclick=${navigateToTag(emit)}>
        ${tags.map(tag)}
      </footer>
    </article>
  `
}

function navigateToTag (emit) {
  return (e) => {
    e.preventDefault()
    emit(blog.LOAD_TAG, e.target.innerText)
  }
}

function computeDate (date) {
  date = new Date(date)
  let day = String(date.getDate())
  day = day.length === 1 ? `0${day}` : day
  let month = String(date.getMonth() + 1)
  month = month.length === 1 ? `0${month}` : month
  let year = date.getFullYear()
  let hours = date.getHours()
  hours = String(hours).split('').length < 1 ? "00" :
    String(hours).split('').length < 2 ? "0" + hours : hours
  let minutes = date.getMinutes()
  minutes = String(minutes).split('').length < 1 ? "00" :
    String(minutes).split('').length < 2 ? "0" + minutes : minutes
  return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes
}

