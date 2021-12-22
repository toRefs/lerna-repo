import JSteps from './src/steps.vue'

JSteps.install = Vue => {
  Vue.component(JSteps.name, JSteps)
}

export default JSteps
