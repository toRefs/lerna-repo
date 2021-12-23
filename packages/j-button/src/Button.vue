<template>
  <button
      class="ui button"
      :class="buttonClass"
      :disabled="disabled"
      @click="handleClick">
    <!--  有动画时  -->
    <template v-if="animated">
      <div v-if="$slots.hidden" class="hidden content">
        <slot name="hidden"></slot>
      </div>
      <div v-if="$slots.visible" class="visible content">
        <slot name="visible"></slot>
      </div>
    </template>
    <!--  没有时  -->
    <template v-else>
      <i v-if="icon" class="icon" :class="icon"></i>
      <slot></slot>
    </template>
  </button>
</template>
<script>
import 'semantic-ui-css/semantic.min.css'

export default {
  name: 'JButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        // 只要传入size属性，就会进入到这个函数，返回true生效，false不生效
        return ['primary', 'basic', 'secondary', 'red', 'green', 'purple'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'].includes(value)
      }
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    animated: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      const bClass = [this.type]
      this.size && bClass.push(this.size)
      this.loading && bClass.push('loading')
      this.disabled && bClass.push('disabled')
      this.animated && bClass.push('animated ' + this.animated)
      return bClass.join(' ')
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style>
</style>
