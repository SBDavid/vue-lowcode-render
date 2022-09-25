import { h, resolveComponent } from 'vue'

export default {
  setup() {

    const TsxComp = resolveComponent('TsxComp')

    return () =>
      h(TsxComp, {
        title: "title",
        count: 11
      })
  },
}