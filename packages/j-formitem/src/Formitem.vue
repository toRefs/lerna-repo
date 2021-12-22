<template>
  <div class="ui form">
    <div :class="{ required: !!label, error: errMessage }" class="field">
      <label>{{ label }}</label>
      <slot></slot>
      <p style="display: block" class="ui warning message" v-if="errMessage"> {{ errMessage }} </p>
    </div>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.min.css'
import AsyncValidator from 'async-validator'
export default {
  name: 'JFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  mounted() {
    this.$on('validate', () => {
      console.log('xxxxx')
      this.validate()
    })
  },
  data () {
    return {
      errMessage: ''
    }
  },
  methods: {
    validate () {
      if (!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>
