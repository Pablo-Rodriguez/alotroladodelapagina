
import html from 'choo/html'

import {blog} from '../../stores/types'
import style from './style'
import layout from '../aolp-layout/aolp-layout'
import post from '../aolp-blog-post/aolp-blog-post'
import pagination from '../aolp-pagination/aolp-pagination'

export default (state, emit) => {
  let posts = state.blog.posts
  if (posts == null) {
    emit(blog.LOAD_POSTS)
    posts = 'Cargando...'
  } else {
    posts = posts.map(props => post(props, emit))
  }
  return html`
    <div>
      ${layout(state, emit, html`
        <section class="${style}">
          ${posts}
          ${pagination(state.blog, emit)}
        </section>
      `)}
    </div>
  `
}

