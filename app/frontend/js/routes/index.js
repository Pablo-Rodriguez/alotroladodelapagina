
import blog from '../components/aolp-blog/aolp-blog'
import post from '../components/aolp-post-view/aolp-post-view'
import about from '../components/aolp-about/aolp-about'
import notfound from '../components/aolp-not-found/aolp-not-found'

export default (app) => {
  app.route('/', blog)
  app.route('/post/:post', post)
  app.route('/about', about)
  app.route('/not-found', notfound)
  app.route('*', (state, emit) => {
    emit(state.events.REPLACESTATE, '/not-found')
    return notfound(state, emit)
  })
}

