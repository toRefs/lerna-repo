import JForm from '../'
import JFormItem from '../../j-formitem'
import JInput from '../../j-input'
import JButton from '../../j-button'

export default {
  title: 'JForm',
  component: JForm
}

export const Login = () => ({
  components: { JForm, JFormItem, JInput, JButton },
  template: `
    <j-form class="form" ref="form" :model="user" :rules="rules">
      <j-form-item label="用户名" prop="username">
        <!-- <j-input v-model="user.username"></j-input> -->
        <j-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></j-input>
      </j-form-item>
      <j-form-item label="密码" prop="password">
        <j-input type="password" v-model="user.password"></j-input>
      </j-form-item>
      <j-form-item>
        <j-button type="primary" @click.prevent="login">登 录</j-button>
      </j-form-item>
    </j-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
