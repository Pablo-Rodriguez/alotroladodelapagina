
import 'babel-polyfill'
//import '@webcomponents/webcomponentsjs/webcomponents-sd-ce.js'
import '@webcomponents/shadydom/shadydom.min.js'
import '@webcomponents/shadycss/scoping-shim.min.js'
//import '@webcomponents/shadycss/apply-shim.min.js'
//import '@webcomponents/shadycss/custom-style-interface.min.js'
//import '@webcomponents/custom-elements/src/native-shim'

import './components'
import createRouter from './routes'

window.addEventListener('WebComponentsReady', () => {
  createRouter()
})

