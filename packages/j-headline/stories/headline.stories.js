import JHeadline from '../index.js'
export default {
  title: 'JHeadline',
  component: JHeadline
}

const Headline = args => ({
  components: { JHeadline },
  data () {
    return { args }
  },
  template: `
    <j-headline v-bind="args">
      标题
      <div slot="sub">
        子标题
      </div>
    </j-headline>
  `
})

export const Default = Headline.bind({})
Default.args = {
  level: 1,
  icon: 'setting'
}
