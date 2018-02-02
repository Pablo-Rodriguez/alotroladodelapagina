
import html from 'choo/html'

import style from './style'
import tag from '../aolp-tag/aolp-tag'
import parser from '../aolp-post-parser/aolp-post-parser'

export default (props, emit) => {
  let {title, date, body, tags} = props
  const link = postLink(props.slug || '')
  return html`
    <article class=${style}>
      <header>
        <h2><a href="${link}">${title}</a></h2>
        <h5>${computeDate(date)}</h5>
      </header>
      ${parser(body, emit)}
      <footer>
        ${tags.map(tag)}
      </footer>
    </article>
  `
}

function postLink (slug) {
  const l = window.location
  return `${l.protocol}//${l.host}/post/${slug}`
}

function computeDate (date) {
  date = new Date(date)
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hours = date.getHours()
  hours = String(hours).split('').length < 1 ? "00" :
    String(hours).split('').length < 2 ? "0" + hours : hours
  let minutes = date.getMinutes()
  minutes = String(minutes).split('').length < 1 ? "00" :
    String(minutes).split('').length < 2 ? "0" + minutes : minutes
  return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes
}

