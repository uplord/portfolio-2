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

        <BlockSection
          id="about-me"
          :sections="[{
            image: '/assets/images/me.png',
            subtitle: 'About Michael Allen',
            title: 'Front End Development',
            content: '<p>I\'m an experienced Front End Developer who has excellent collaboration, organization and teamwork skills with a keen attention to detail. Passionate about developing in HTML, CSS and JavaScript and always open to exploring new technologies. Over the last 7 years I have dealt with a variety of small and large clients. This has helped by my strong analytical, debugging and problem-solving skills to create exceptional websites.</p>',
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