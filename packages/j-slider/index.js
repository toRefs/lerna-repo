import JSlider from './src/slider'
import 'semantic-ui-css/semantic.min.css'

JSlider.install = Vue => {
  Vue.component(JSlider.name, JSlider)
}

export default JSlider
