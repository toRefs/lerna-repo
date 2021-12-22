import JForm from './src/Form.vue'
import 'semantic-ui-css/semantic.min.css'

JForm.install = Vue => {
  Vue.component(JForm.name, JForm)
}
console.log('test')
export default JForm
