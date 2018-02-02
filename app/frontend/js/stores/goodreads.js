
import {goodreads} from './types'
import {Goodreads} from '../api'

export default (state, bus) => {
  bus.on(goodreads.LOAD_BOOKS, async () => {
    try {
      const books = await Goodreads.getBooks()
      state.goodreads.books = books
    } catch (e) {
      state.goodreads.books = []
    }
    bus.emit('render')
  })
}

