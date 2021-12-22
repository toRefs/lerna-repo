import JHeadline from './src/headline.vue'
import 'semantic-ui-css/semantic.min.css'

JHeadline.install = (Vue) => {
  Vue.component(JHeadline.name, JHeadline)
}

export default JHeadline
