<template>
  <div class="button-group">
    <ButtonsButton v-for="(button, key) in buttons" :key="key" :button="button" />
  </div>
</template>

<script>
export default {
  props: ['buttons']
}
</script>

<style lang="less">
  @import 'style';
</style>