<template>
  <main>
    <section>
      <div class="inner-container">

        <BlockBanner
          id="banner"
          :slides="[{
            floatingImage: '/assets/images/me.jpeg',
            title: 'Hi I\'m Michael a Senior Front End Developer based in Dundee, Scotland',
            subtitle: 'With 7 years in the industry creating websites',
            buttons: [{
              text: 'Get in touch',
              link: 'mailto:michael@uplord.co.uk',
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
    setup () {
      useHead({
        bodyAttrs: {
          class: 'homepage'
        }
      })
    },
  }
</script>