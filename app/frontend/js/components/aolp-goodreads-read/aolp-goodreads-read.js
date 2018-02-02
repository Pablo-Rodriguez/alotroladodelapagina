
import html from 'choo/html'

import {goodreads} from '../../stores/types'
import {default as style, bookStyle} from './style'
import stars from '../aolp-stars/aolp-stars'

const max = 300

const Book = (props) => {
  let review = props.review || ''
  review = review.replace(/<br\/>/g, ' ')
  review = review.replace(/<br \/>/g, ' ')
  review = review.length > max ? review.slice(0, max) + '...' : review
  return html`
    <article class=${bookStyle}>
      <img src="${props.image}" alt="${props.title}" title="${props.title}"/>
      <div>
        <hgroup>
          <h4><a href="${props.link}">${props.title}</a></h4><span>by</span><h5>${props.author}</h5>
        </hgroup>
        <div id="review">${review}</div>
        ${stars(props.stars, 5)}
      </div>
    </article>
  `
}

export default ({books}, emit) => {
  if (books == null) {
    books = []
    emit(goodreads.LOAD_BOOKS)
  }
  return html`
    <section class=${style}>
      <h3>Últimas lecturas</h3>
      <div>${books.map(book => Book(book))}</div>
    </section>
  `
}

