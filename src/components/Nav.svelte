<script lang="ts">
  import { browser } from '$app/env'

  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { fly } from 'svelte/transition'

  import { outclick } from '../events/outclick'
  import type { HeaderNav } from '../models'

  let visible = true
  let pathname: string

  onMount(() => {
    pathname = $page.url.hash.slice(1) || 'home'

    const navbar = document.querySelector('#navbar') as HTMLElement | null;

    if (navbar) {
      const sticky = navbar.offsetTop
      const lightWhite = 'bg-white/[.2]'
      const firmerWhite = 'bg-white/[.95]'
      const shadow = 'shadow-lg'

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

  const nav: HeaderNav[] = [
    { label: `Home`, uri: `#home`, current: 'home' },
    { label: `About`, uri: `#about`, current: 'about' },
    { label: `Features`, uri: `#features`, current: 'features' },
    { label: `Consultation`, uri: `#consult`, current: 'consult' }
  ]

  let show = () => {
    visible = !visible
  }

  $: if (browser) document.body.classList.toggle('overflow-y-hidden', !visible)
</script>

<template>
  <nav id="navbar" class="bg-white/[.2] sm:fixed w-full z-40 transition ease-in-out duration-300 scroll">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />

            <h1 class="ml-3 text-2xl">HomeroomOne</h1>
          </div>

          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            {#each nav as link}
              <a
                href={link.uri}
                class="desktop-nav-link"
                class:active={link.current === pathname}
                on:click={() => {
                  pathname = link.current
                }}
              >
                {link.label}
              </a>
            {/each}
          </div>
        </div>

        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="flex-shrink-0">
            <a
              class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              href="mailto:hello@homeroomone.com"
              target="_blank"
            >
              <!-- Heroicon name: outline/mail-open -->
              <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
              <span>Contact</span>
            </a>
          </div>
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dusk-900"
            aria-controls="mobile-menu"
            aria-expanded="false"
            on:click={show}
            use:outclick
            on:outclick={() => (visible = true)}
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="{visible ? 'block' : 'hidden'} h-6 w-6 stroke-dusk-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="{visible ? 'hidden' : 'block'} h-6 w-6 stroke-dusk-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu state. -->
  {#if !visible}
    <div
      class="origin-top-right fixed top-0 left-0 w-3/4 h-screen shadow-lg bg-white sm:hidden z-50 flex flex-col"
      id="mobile-menu"
      in:fly={{ x: -50, duration: 250 }}
      out:fly={{ duration: 250 }}
    >
      <div class="py-4 pr-4 pl-3 border-b border-gray-300">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />

          <h1 class="ml-3 text-2xl">HomeroomOne</h1>
        </div>
      </div>
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        {#each nav as link}
          <a
            href={link.uri}
            class="mobile-nav-link"
            class:active={link.current === pathname}
            on:click={() => {
              pathname = link.current
            }}
          >
            {link.label}
          </a>
        {/each}
      </div>

      <div class="py-4 border-t border-gray-300 mt-auto flex flex-col">
        <div class="px-5 pb-3">
          <h5 class="text-midnight-900 flex place-items-center">
            <!-- Heroicon name: outline/phone -->
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span class="text-xl">Call us</span>
          </h5>
          <h5 class="text-xl ml-6 text-dusk-900">800 555 1234</h5>
        </div>

        <div class="px-5 pb-3">
          <h5 class="text-midnight-900 flex place-items-center">
            <!-- Heroicon name: outline/mail -->
            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xl">Email us</span>
          </h5>
          <h5 class="text-xl ml-6 text-dusk-900">
            <a href="mailto:hello@homeroom.one" target="_blank">hello@homeroom.one</a>
          </h5>
        </div>

        <div class="pt-4 pb-6 px-5">
          <p class="text-md text-midnight-500">
            We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Sorry, Data. I'll alert the crew.
            Computer, belay that order.
          </p>
        </div>

        <div class="border-t border-gray-200 px-5 pb-3 mt-auto">
          <div class="pt-4 flex">
            <a href="http://" target="_blank" rel="noopener noreferrer" class="mobile-social-icons">
              <!-- Bootstrap Icon name: twitter -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer" class="mobile-social-icons">
              <!-- Bootstrap Icon name: youtube -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                />
              </svg>
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer" class="mobile-social-icons">
              <!-- Bootstrap Icon name: facebook -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer" class="mobile-social-icons">
              <!-- Bootstrap Icon name: facebook -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</template>

<style lang="less">
  .desktop-nav-link {
    @apply text-midnight-500 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium transition ease-in-out duration-300;

    &.active {
      @apply text-midnight-900 border-dusk-900 border-b-2;

      &:hover {
        @apply text-midnight-900 border-dusk-900;
      }
    }

    &:hover {
      @apply text-midnight-600 border-gray-300;
    }

    // Animated border that is broken
    // &:after {
    //   @apply border-white border-b-2;

    //   display: block;
    //   content: '';
    //   transform: scaleX(0);
    //   transition: transform 250ms ease-in-out;
    // }

    // &:hover {
    //   @apply text-midnight-600;

    //   &:after {
    //     transform: scaleX(1);
    //   }
    // }
  }

  .mobile-nav-link {
    @apply border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium;

    &.active {
      @apply bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium;
    }
  }

  .mobile-social-icons {
    @apply transition ease-in-out rounded-full duration-500 mr-6 place-items-center hover:bg-dusk-800 p-2;

    > svg {
      @apply h-6 w-6 fill-dusk-800 transition ease-in-out duration-500 mx-auto;
    }

    &:hover,
    &:hover > svg {
      @apply fill-white;
    }
  }
</style>
