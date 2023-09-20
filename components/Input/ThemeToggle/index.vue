<template>
  <div class="toggle" @click="toggleTheme">
    <span class="dot"></span>
    <span class="svg-wrap sun">
      <nuxt-icon name="sun" filled />
    </span>
    <span class="svg-wrap moon">
      <nuxt-icon name="moon" filled />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
    }
  },
  mounted() {
    // Check for theme in localStorage or default to system preference
    this.theme = localStorage.getItem('color-mode') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.applyTheme();
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'; // Toggle theme
      localStorage.setItem('color-mode', this.theme); // Save theme preference
      this.applyTheme();
    },
    applyTheme() {
      document.documentElement.classList.remove(this.theme === 'light' ? 'dark' : 'light');
      document.documentElement.classList.add(this.theme);
      if (document.querySelector('.banner.is-auto')) {
        document.querySelector('.header').classList.remove('dark-header', 'light-header');
      }
    },
  }
}
</script>

<style lang="less">
  @import 'style';
</style>