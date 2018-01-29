
import page from 'page'

export default () => {
  page('/', () => {
    console.log('router going')
  })
  page('/about', () => {})
  page()
}

