<template>
  <component :is="button.type || 'div'" :to="button.link" :class="['button', button.class]">
    {{ button.text }}
  </component>
</template>

<script>
export default {
  props: ['button']
}
</script>