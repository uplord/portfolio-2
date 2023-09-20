<template>
  <main>
    <section>
      <div class="inner-container">

        <BlockBanner
          id="banner"
          :slides="[{
            floatingImage: '/assets/images/me.jpeg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Suspendisse potenti. Nunc vel tortor diam. Pellentesque habitant morbi tristique.',
            buttons: [{
              text: 'Get in touch',
              link: '/',
              class: 'large'
            }],
            class: ''
          }]"
        />

      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>