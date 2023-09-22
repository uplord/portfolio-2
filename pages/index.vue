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
              class: 'large',
              type: 'a'
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

        <BlockSection
          id="timeline"
          :sections="[{
            subtitle: 'My Timeline',
            title: 'Browse Michael Allen’s timeline',
            content: '<p>I have included here my progress through the world of website development from my beginnings at university to my current work I do now. Each stage has helped to build me up to the developer I am today through lots of different projects big and small.</p>',
            buttons: [{
              text: 'Get in touch',
              link: 'mailto:michael@uplord.co.uk',
              class: 'large'
            }],
            class: 'flex-start sticky',
            icons: [{
              subtitle: 'Sept 2021 - Present',
              title: 'Senior Front End Developer',
              logo: {
                src: 'snappy-logo',
                url: 'https://www.snappyshopper.co.uk/'
              },
              content: '<p>Returning to Hungrrr full time just in time for the merger with Snappy Shopper and continuing to lead the front end of the Hungrrr platform while also assisting the Snappy Shopper team. Updating and improving the ordering platform to keep up with style trends and work better for clients and members in the team.</p>' +
                '<p>Maintaining hundreds of clients websites and making periodic changes to improve their performance and help pull through more sales. Increasing the amount of client enquires to join the platforms through updates to the B2B websites making it easier to sign up and to keep a track of these leads.</p>',
              class: ''
            },{
              subtitle: 'May 2020 - July 2020 ',
              title: 'Front End Developer',
              logo: {
                src: 'hungrrr-logo',
                url: 'https://www.hungrrr.co.uk/'
              },
              content: '<p>Leading front end in the company at the beginning of the pandemic. Integrating a table ordering system for businesses reopening to make the users journey easier and opening up this feature to all the client on this platform.</p><p>Developing an internal business setup tool to make it easier for our team to add businesses to our system and also maintain clients. Continuing to do work for them while back at mtc due to the impact I made in the company even in just a short period of time. </p>',
              class: ''
            },{
              subtitle: 'Sept 2015 - Sept 2021 ',
              title: 'Front End Devloper',
              logo: {
                src: 'mtc-logo',
                url: 'https://www.mtc.co.uk/'
              },
              content: '<p>While in mtc I have worked in many areas of the company from leading projects to dealing with aftercare for clients. I was able to work on complex projects early into joining the company without needing much assistance to mentoring newer members of staff.</p><p>I have dealt with hundreds of different websites and have the ability to work to tight deadlines without lowering quality. I have been able to work across multiple teams in the company and am quick to adapt to new situations.</p>',
              class: ''
            },{
              subtitle: '2013 - 2015',
              title: 'BSc (Hons), Web Design and Development',
              logo: {
                src: 'abertay-logo',
                url: 'https://www.abertay.ac.uk/'
              },
              content: '<p>My first steps learning and building a variety of projects.</p>',
              class: ''
            }]
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