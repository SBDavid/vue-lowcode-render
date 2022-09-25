import { defineComponent, defineProps, ref, onMounted, provide } from 'vue';

export default defineComponent({
  props: {
    title: String,
    count: Number,
  },
  setup(props) {

    // 这是错误的，不能使用defineProps
    // const props = defineProps({
    //   title: String
    // })

    return () => {
      return (<div>
        <Render title={props.title} count={props.count} />
      </div>)
    }
  }
})

function Render(props: {title: string|undefined, count: Number|undefined}) {
  return (
    <>{props.title} - {props.count}</>
  )
}