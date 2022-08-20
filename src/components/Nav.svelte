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
    { label: `Features`, uri: `#features`, current: 'features' },
    { label: `Contact`, uri: `#contact`, current: 'contact' }
  ]

  const show = () => {
    visible = !visible
  }
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white shadow fixed w-full z-10">
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

    <!-- Mobile menu, show/hide based on menu state. -->
    {#if !visible}
      <div class="origin-top-right absolute right-0 w-full rounded-b-md shadow-lg py-1 bg-white sm:hidden" id="mobile-menu" in:fly={{ y: 50, duration: 250 }} out:fly={{ duration: 250 }}>
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
      </div>
    {/if}
  </nav>
</template>

<style lang="less">
  .nav-link {
    @apply border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium;

    &.active {
      @apply border-indigo-500 text-gray-900;
    }

    &:after {
      display: block;
      content: '';
      border-bottom: solid 3px #019fb6;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover {
      // @apply border-gray-300 text-gray-700;
      flex: 1;
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
