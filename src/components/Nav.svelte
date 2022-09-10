<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  import { browser } from '$app/env'
  import { page } from '$app/stores'


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
