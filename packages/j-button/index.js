import JButton from './src/Button.vue'

JButton.install = (Vue) => {
  Vue.component(JButton.name, JButton)
}

export default JButton
