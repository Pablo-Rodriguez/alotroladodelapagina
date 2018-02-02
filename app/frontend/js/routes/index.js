
import blog from '../components/aolp-blog/aolp-blog'
import about from '../components/aolp-about/aolp-about'
import notfound from '../components/aolp-not-found/aolp-not-found'

export default (app) => {
  app.route('/', blog)
  app.route('/about', about)
  app.route('*', notfound)
}

