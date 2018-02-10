
import {jump} from '../lib/util'

import {blog as types} from './types'
import {Blog} from '../api'

export default (state, bus) => {
  const {blog} = state

  bus.on(state.events.NAVIGATE, () => {
    blog.posts = null
    blog.page = state.query.p
    blog.tag = decodeURIComponent(state.query.tag)
  })

  bus.on(types.LOAD_POSTS, async () => {
    const page = blog.page
    const tag = blog.tag
    try {
      const response = await getPage(page, tag)
      if (response.posts.length > 0) {
        blog.posts = response.posts
        blog.more = response.more
        blog.page = page
        bus.emit(state.events.RENDER)
      } else {
        blog.posts = null
        blog.more = false
        if (tag != null || (typeof tag === 'string' && tag.length > 0)) {
          blog.tag = ''
        }
        if (blog.page === 0) {
          bus.emit(state.events.REPLACESTATE, '/not-found')
        } else {
          blog.page = 0
          changePage(bus, blog, state.events.REPLACESTATE)
        }
      }
    } catch (e) {
    
    }
  })

  bus.on(types.PAGE_BACK, async () => {
    const tag = state.blog.tag
    blog.page = blog.page > 0 ? blog.page - 1 : 0
    blog.more = true
    jump()
    try {
      const response = await getPage(blog.page, tag)
      blog.posts = response.posts
      changePage(bus, blog, state.events.PUSHSTATE)
    } catch (e) {
    
    }
  })

  bus.on(types.PAGE_FORWARD, async () => {
    if (blog.more) {
      const tag = state.blog.tag
      blog.page++
      jump()
      try {
        const response = await getPage(blog.page, tag)
        blog.posts = response.posts
        blog.more = response.more
        changePage(bus, blog, state.events.REPLACESTATE)
      } catch (e) {
      
      }
    }
  })

  bus.on(types.LOAD_TAG, async (tag) => {
    tag = tag.split('#').join('')
    blog.tag = tag
    blog.more = false
    blog.page = 0
    blog.posts = null
    jump()
    changePage(bus, blog, state.events.PUSHSTATE)
  })

  bus.on(types.LOAD_POST, async (slug) => {
    try {
      const response = await Blog.getOne(slug)
      if (!response.err && response.post != null) {
        blog.post = response.post
        bus.emit(state.events.RENDER)
      } else {
        bus.emit(state.events.REPLACESTATE, '/not-found')
      }
    } catch (e) {
    
    }
  })

  bus.on(types.DISQUS_INIT, () => {
    blog.disqus.init = true
  })
}

function changePage (bus, blog, event) {
  bus.emit(event, `/?tag=${encodeURIComponent(blog.tag)}&p=${blog.page}`)
}

function getPage (page, tag = '') {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Blog.get({page, tag})
      if (!response.err) {
        resolve(response)
      } else {
        reject(err)
      }
    } catch (e) {
      reject(e)
    }
  })
}

