import JSteps from './src/steps'
import 'semantic-ui-css/semantic.min.css'

JSteps.install = Vue => {
  Vue.component(JSteps.name, JSteps)
}

export default JSteps
