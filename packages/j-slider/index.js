import JSlider from './src/slider.vue'
import 'semantic-ui-css/semantic.min.css'

JSlider.install = Vue => {
  Vue.component(JSlider.name, JSlider)
}

export default JSlider
