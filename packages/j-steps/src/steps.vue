<template>
  <div class="ui ordered steps" :size="size">
    <div
      class="step"
      :class="{
      'active': item === active,
      'completed': item < active
    }"
      v-for="item in count"
      :key="item">
      <div class="content">
        <div class="title">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.min.css'

export default {
  name: 'JSteps',
  props: {
    size: {
      type: String,
      default: 'tiny',
      validator (value) {
        return ['mini', 'tiny', 'small', 'large', 'big'].includes(value)
      }
    },
    count: {
      type: Number,
      default: 1,
      required: true
    },
    active: {
      type: Number,
      default: 2
    }
  }
}
</script>
