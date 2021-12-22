import JInput from './src/input.vue'
import 'semantic-ui-css/semantic.min.css'

JInput.install = Vue => {
  Vue.component(JInput.name, JInput)
}

export default JInput
