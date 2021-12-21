import JSteps from '../index.js'
export default {
  title: 'JSteps',
  component: JSteps,
  excludeStories: /.*Data$/
}

const Steps = (args) => ({
  components: { JSteps },
  data () {
    return { args }
  },
  template: '<j-steps v-bind="args"></j-steps>'
})

export const Default = Steps.bind({})
Default.args = {
  size: 'mini',
  count: 5,
  active: 3
}
