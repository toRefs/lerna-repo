<template>
  <div class="container">
    <j-button
        type="green"
        size="large"
        icon="setting"
    >按钮</j-button>
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
</template>

<script>
import JButton from 'j-test-button/index'
export default {
  name: 'App',
  components: {
    JButton
  }
}
</script>

<style scoped>

</style>
