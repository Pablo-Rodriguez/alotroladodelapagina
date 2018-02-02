
import initialState from './initial-state'
import goodreadsReducer from './goodreads'
import blogReducer from './blog'

export default (state, bus) => {
  Object.assign(state, initialState(state))
  goodreadsReducer(state, bus)
  blogReducer(state, bus)
}

