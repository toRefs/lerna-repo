import JInput from '../'

export default {
  title: 'JInput',
  component: JInput
}

export const Text = () => ({
  components: { JInput },
  template: '<j-input v-model="value"></j-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { JInput },
  template: '<j-input type="password" @input="console.log($event)" v-model="value"></j-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
