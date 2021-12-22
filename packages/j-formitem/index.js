import JFormItem from './src/Formitem.vue'
import 'semantic-ui-css/semantic.min.css'

JFormItem.install = Vue => {
  Vue.component(JFormItem.name, JFormItem)
}

export default JFormItem
