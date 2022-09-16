import { h } from 'vue'

import App from './App.vue'

const Ele = h('div', {
  id: 'foo',
  onClick: new Function("e", "console.info(e)") 
}, h(App))

export default {
  setup(props, { emit }) {
    return () =>
      h(Ele)
  },
}