<template>
  <Header/>
  
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from '@/components/footers/FooterWithContactForm.vue'
import Header from '@/components/headers/HeaderRoundedFloating.vue'


export default {
  components: {
    Footer,
    Header,
  },
}
</script>

<style>
body {
  background-image: linear-gradient(
  45deg,
  hsl(240deg 67% 2%) 0%,
  hsl(273deg 28% 8%) 11%,
  hsl(302deg 26% 11%) 22%,
  hsl(327deg 36% 16%) 33%,
  hsl(343deg 42% 20%) 44%,
  hsl(357deg 42% 25%) 56%,
  hsl(13deg 52% 26%) 67%,
  hsl(26deg 66% 26%) 78%,
  hsl(40deg 82% 24%) 89%,
  hsl(55deg 93% 21%) 100%
);
  margin: 0;
}

#app {
  max-width: 1140px;
  margin: auto;
}

h {
  color: white;
}

p {
  color: #f0f0f0;
}

input {
  background: transparent;
}
</style>

