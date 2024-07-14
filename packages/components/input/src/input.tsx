import { defineComponent } from "vue";
import { ElInput } from "element-plus";

const EsInput = defineComponent({
  name: 'EsInput',
  setup(props, {attrs}) {
    return <ElInput {...attrs}></ElInput>
  }
})

export default EsInput