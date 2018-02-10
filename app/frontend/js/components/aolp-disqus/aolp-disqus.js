
import html from 'choo/html'
import debounce from 'debounce'

import {blog} from '../../stores/types'
import style from './style'

const update = debounce(_update, 500)

export default ({disqus, post}, emit) => {
  if (typeof post.slug === 'string') {
    if (!disqus.init) {
      window.disqus_config = configure(post)
      initialize()
      emit(blog.DISQUS_INIT)
    } else {
      update(post)
    }
  }

  return html`
    <article id="disqus_thread" class=${style}></article>
  `
}

function initialize () {
  let script = document.createElement('script')
  script.src = '//alotroladodelapagina.disqus.com/embed.js'
  script.setAttribute('data-timestamp', +new Date())
  if (document.head != null) {
    document.head.appendChild(script)
  } else {
    document.body.appendChild(script)
  }
}

function configure (post) {
  const l = window.location
  return function () {
    this.page.identifier = post.slug
    this.page.url = `${l.protocol}//${l.host}/post/${post.slug}`
    this.page.title = post.title
  }
}

function _update (post) {
  if (window.DISQUS != null) {
    window.DISQUS.reset({
      reload: true,
      config: configure(post)
    })
  } else {
    setTimeout(function () {update(post)}, 1000)
  }
}

