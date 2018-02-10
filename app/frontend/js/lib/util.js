
import j from 'jump.js'

export function jump (to = '#jump-here', config = {
  duration: 500,
  offset: 0,
  a11y: false
}, fn) {
  j(to, {
    duration: config.duration,
    callback: fn,
    offset: config.offset,
    a11y: config.a11y
  })
}

