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

        <BlockCards
          id="projects"
          classes="text-center alignwide mobile-2"
          title="Projects I've Worked On"
          :cards="[{
            svg: 'brewdog',
            title: 'Brewdog',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Brewdog'
          },{
            svg: 'gdk',
            title: 'German Doner Kebab',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'German Doner Kebab'
          },{
            svg: 'subway',
            title: 'Subway',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Subway'
          },{
            svg: 'superga',
            title: 'Superga',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Supega'
          },{
            svg: 'umbro',
            title: 'Umbro UK',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Umbro UK'
          },{
            svg: 'dundeeunited',
            title: 'Dundee United',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Dundee United Football Club'
          },{
            svg: 'hungrrr',
            title: 'Hungrrr',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Hungrrr'
          },{
            svg: 'snappy',
            title: 'Snappy Shopper',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Snappy Shopper'
          },{
            svg: 'macdonalds',
            title: 'Macdonald Hotels and Resorts',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Macdonald Hotels and Resorts'
          },{
            svg: 'campbells',
            title: 'Campbells Meat',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Campbells Meat'
          },{
            image: '/assets/images/petervardy.png',
            title: 'Peter Vardy',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'Peter Vardy'
          },{
            image: '/assets/images/carmoney.png',
            title: 'Carmoney',
            class: 'mini middle text-center',
            textHover: false,
            hideText: true,
            tooltip: 'CarMoney'
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