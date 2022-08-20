<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { fly } from 'svelte/transition'

  import { outclick } from '../events/outclick'
  import type { HeaderNav } from '../models'

  let visible = true
  let pathname: string

  onMount(() => {
    pathname = $page.url.hash.slice(1) || 'home'
    console.log(pathname)
  })

  const nav: HeaderNav[] = [
    { label: `Home`, uri: `#home`, current: 'home' },
    { label: `About`, uri: `#about`, current: 'about' },
    { label: `Features`, uri: `#features`, current: 'features' }
  ]

  const show = () => {
    visible = !visible
  }
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-transparent fixed w-full z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            {#each nav as link}
              <a
                href={link.uri}
                class="nav-link"
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
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            </button>
          </div>
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
              class="block h-6 w-6"
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
              class="hidden h-6 w-6"
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
      class="origin-top-right absolute left-0 w-3/4 h-screen shadow-lg py-1 bg-white sm:hidden z-10 flex flex-col"
      id="mobile-menu"
      in:fly={{ x: -50, duration: 250 }}
      out:fly={{ duration: 250 }}
    >
      <div class="pt-2 pr-4 pb-3 pl-3 border-b border-gray-300">Something should go here?</div>
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

      <div class="pt-4 pb-3 border-t border-gray-300 mt-auto flex flex-col">
        <div>
          <!-- Heroicon name: outline/phone -->
          <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>

          Call us
          800 555 1234
        </div>
        <div>
          <!-- Heroicon name: outline/mail -->
          <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email us
          <a href="mailto:hello@homeroom.one">hello@homeroom.one</a>
        </div>
        <div class="mt-auto">
          Social media icons
        </div>
      </div>
    </div>
  {/if}
</template>

<style lang="less">
  .nav-link {
    @apply border-transparent inline-grid grid-rows-1 gap-0 items-center px-1 pt-1 text-base font-medium;

    color: #140342;

    &.active {
      @apply border-b-2;
      border-color: #6440fb;
    }

    &:after {
      display: block;
      content: '';
      border-bottom: solid 2px #6440fb;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }

  .mobile-nav-link {
    @apply border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium;

    &.active {
      @apply bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium;
    }
  }
</style>
