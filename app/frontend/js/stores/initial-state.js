
import nanoquery from 'nanoquery'

export default (state) => {
  const query = nanoquery(window.location.href)
  return {
    goodreads: {
      books: null
    },
    blog: {
      posts: null,
      post: null,
      page: safe(() => Number(query.p), 0) || 0,
      more: false,
      tag: decodeURIComponent(query.tag || '') || '',
      disqus: {
        init: false
      }
    }
  }
}

function safe (fn, def) {
  try {
    return fn()
  } catch (e) {
    return def
  }
}

