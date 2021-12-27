import JButton from '../index.js'
import { action } from '@storybook/addon-actions'
export default {
  title: 'JButton',
  component: JButton,
  excludeStories: /.*Data$/,
  argTypes: {
  }
}
export const actionsData = {
}

const Button = (args) => ({
  components: { JButton },
  data () {
    return { args, ...actionsData }
  },
  template: '<j-button v-bind="args" @click="action">按钮</j-button>',
  methods: {
    action: action('clicked了')
  }
})

export const Default = Button.bind({})
Default.args = {
  type: 'red',
  size: 'massive'
}

export const animated = (args) => ({
  components: { JButton },
  data () {
    return { args }
  },
  template: `
      <div>
        <j-button animated="fade" type="green">
          <div slot="hidden">$9.99</div>
          <div slot="visible"><i class="shop icon"></i>加入购物车</div>
        </j-button>
        <j-button animated="vertical" type="red">
          <div slot="hidden">$9.99</div>
          <div slot="visible"><i class="shop icon"></i>加入购物车</div>
        </j-button>
        <j-button animated="animated" type="secondary">
          <div slot="hidden">$9.99</div>
          <div slot="visible"><i class="shop icon"></i>加入购物车</div>
        </j-button>
      </div>
  `
})
