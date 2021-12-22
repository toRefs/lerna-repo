import JButton from './src/Button.vue'
import 'semantic-ui-css/semantic.min.css'

JButton.install = (Vue) => {
  Vue.component(JButton.name, JButton)
}

export default JButton
