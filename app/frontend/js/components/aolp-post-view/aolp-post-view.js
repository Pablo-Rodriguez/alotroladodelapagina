
import html from 'choo/html'

import {blog} from '../../stores/types'
import style from './style'
import layout from '../aolp-layout/aolp-layout'
import post from '../aolp-blog-post/aolp-blog-post'
import disqus from '../aolp-disqus/aolp-disqus'

export default (state, emit) => {
  let postProps = defaultPost()
  let comments
  if (state.blog.post != null &&
    state.blog.post.slug === state.params.post) {
    postProps = state.blog.post
    comments = disqus({post: postProps, disqus: state.blog.disqus}, emit)
  } else {
    emit(blog.LOAD_POST, state.params.post)
    comments = html`<article></article>`
  }
  return html`
    <div>
      ${layout(state, emit, html`
        <section class="${style}">
          ${post(postProps, emit)}
          ${comments}
        </section>
      `)}
    </div>
  `
}

function defaultPost () {
  return {
    title: '',
    date: Date.now(),
    slug: '',
    body: '',
    tags: []
  }
}

