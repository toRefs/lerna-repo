import JHeadline from './src/headline'
import 'semantic-ui-css/semantic.min.css'

JHeadline.install = (Vue) => {
  Vue.component(JHeadline.name, JHeadline)
}

export default JHeadline
