<!--
<template>
  <div>
    <h1 v-if="level===1" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header">
          <slot name="sub"></slot>
        </div>
      </div>
    </h1>

    <h2 v-if="level===2" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header">
          <slot name="sub"></slot>
        </div>
      </div>
    </h2>
  </div>
</template>
-->

<script>
import 'semantic-ui-css/semantic.min.css'

export default {
  name: 'j-headline',
  props: {
    level: {
      type: Number,
      default: 1,
      required: false
    },
    icon: {
      type: String,
      default: '',
      required: false
    }
  },
  render (h) {
    let icon, content
    if (this.icon) {
      icon = h('i', { class: `icon ${this.icon}` })
    }
    if (this.$slots.sub) {
      const contentSub = h('div', { class: 'sub header' }, [this.$slots.sub])
      content = h('div', { class: 'content' }, [this.$slots.default, contentSub])
    } else {
      content = h('div', { class: 'content' }, [this.$slots.default])
    }

    return h(`h${this.level}`, { class: 'ui header' }, [icon, content])
  }
}
</script>

<style scoped>

</style>
