<script lang="ts">
  // Svelte
  import { onMount } from 'svelte'

  // CSS
  import '../assets/css/tailwind.css'

  // Components
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'

  onMount(() => {
    const navbar = document.querySelector('#navbar')

    if (navbar) {
      const sticky = navbar.offsetTop
      const lightWhite = 'sm:bg-white/[.2]'
      const firmerWhite = 'sm:bg-white/[.95]'
      const shadow = 'sm:shadow-lg'

      window.onscroll = () => {
        if (window.pageYOffset !== sticky) {
          navbar.classList.remove(lightWhite)
          navbar.classList.add(firmerWhite, shadow)
        } else {
          navbar.classList.remove(firmerWhite, shadow)
          navbar.classList.add(lightWhite)
        }
      }
    }
  })
</script>

<template>
  <Nav />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style lang="less">
  * {
    @apply text-midnight-900;
  }

  .button-primary {
    display: block;
    height: 50px;
    width: 186px;
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    font-size: 14px;
    text-align: center;

    &:after {
      position: absolute;
      content: '';
      display: inline-block;
      background: #3bade3;
      background: linear-gradient(45deg, #3bade3, #576fe6 25%, #9844b7 51%, #ff357f);
      height: 50px;
      width: 372px;
      z-index: -1;
      transform: translateX(-280px);
      transition: transform 0.4s ease-in;
    }

    &:hover:after {
      transform: translateX(-200px);
    }
  }
</style>
