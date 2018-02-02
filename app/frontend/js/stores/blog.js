
import {blog as types} from './types'
import {Blog} from '../api'

export default (state, bus) => {
  const {blog} = state

  bus.on(types.LOAD_POSTS, async () => {
    try {
      const page = state.blog.page
      const response = await Blog.get({page})
      if (!response.err) {
        blog.posts = response.posts
        blog.more = response.more
        blog.page = page
        bus.emit(state.events.RENDER)
      } else {
        // ?
      }
    } catch (e) {
    
    }
  })

  bus.on(types.PAGE_BACK, async () => {
    try {
      blog.page = blog.page > 0 ? blog.page - 1 : 0
      blog.more = true
      const response = await Blog.get({page: blog.page})
      if (!response.err) {
        blog.posts = response.posts
        bus.emit(state.events.PUSHSTATE, `/?tag=${state.blog.tag}&p=${blog.page}`)
      } else {
        
      }
    } catch (e) {
    
    }
  })

  bus.on(types.PAGE_FORWARD, async () => {
    try {
      if (blog.more) {
        blog.page++
        const response = await Blog.get({page: blog.page})
        if (!response.err) {
          blog.posts = response.posts
          blog.more = response.more
          bus.emit(state.events.PUSHSTATE, `/?tag=${state.blog.tag}&p=${blog.page}`)
        } else {
          
        }
      }
    } catch (e) {
    
    }
  })
}

