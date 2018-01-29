
import {Component as Copico} from 'copico'
export {props, styles, styled, shadow, logical, visual} from 'copico'
import autoprefixer from 'autoprefixer'
import {html as lhtml, render as lrender} from '../lit-html/lib/lit-extended'

export function tag (name) {
  return (Class) => {
    window.addEventListener('WebComponentsReady', () => {
      Class.prototype.is = name
      window.customElements.define(name, Class)
    })
  }
}

export class Component extends Copico {
  engineRender (styles, template, el) {
    lrender(lhtml`
      ${styles}
      ${template}
    `, el)
  }

  parseStyles (styles) {
    return lhtml`
      <style>${autoprefixer.process(styles).then(results => results.css).then((s) => {
        setTimeout(() => window.ShadyCSS.styleElement(this), 0)
        return s
      })}</style>
    `
  }
}

export const render = lrender
export const html = lhtml

