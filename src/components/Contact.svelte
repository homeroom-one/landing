<script lang="ts">
  // Svelte
  import { fade } from 'svelte/transition'
  // Packages
  import * as EmailValidator from 'email-validator'
  // Models
  import type { ContactBanner } from '../models'
  // Components
  import PrivacyModal from './PrivacyModal.svelte'

  export let contact: ContactBanner

  let show: boolean = false

  let showModal: boolean = show

  let toMail: string = ''
  let mailSent: boolean = false
  let emailError: boolean = false
  let errorMessage: string = ''

  const sendMail = async () => {
    console.log('Contact > sendMail > toMail: ', toMail)
    if (!EmailValidator.validate(toMail)) {
      emailError = !emailError
      errorMessage = 'Incorrect email format'
      return
    }

    let opts = {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }

    const email = {
      to: toMail
    }

    opts.body = JSON.stringify(email)

    const response = await fetch('/api/consulting/mail/send', opts)
    const blob = await response.json()

    if (blob.status === 200) {
      mailSent = !mailSent
      toMail = 'Success!'
    } else {
      mailSent = false
      emailError = !emailError
      errorMessage = 'There was a problem sending the email'
    }
  }

  const toggleModal = () => {
    showModal = true
  }
</script>

<template>
  <div id="consult" class="text-white gradient mt-16">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl tracking-tight font-bold text-white sm:text-4xl">
          {contact.titleColorOne}
        </h2>
        <p class="mt-3 max-w-3xl text-lg text-white">
          {contact.description}
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8 lg:w-2/5">
        {#if !mailSent}
          <form on:submit|preventDefault transition:fade={{ duration: 300 }} class="sm:flex">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autocomplete="email"
              required
              class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md text-midnight-900"
              placeholder="Enter your email"
              bind:value={toMail}
            />
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="button"
                class="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                on:click={sendMail}
              >
                Learn more
              </button>
            </div>
          </form>

          {#if emailError}
            <p class="mt-1 text-base sm:mt-1 text-red-600" transition:fade={{ duration: 300 }}>{errorMessage}</p>
          {/if}

          <p class="mt-3 text-sm text-white">
            We care about the protection of your data. Read our
            <button on:click={toggleModal} class="underline">Privacy Policy.</button>
          </p>
        {:else}
          <div transition:fade={{ delay: 300, duration: 300 }}>
            <h4 class="text-base tracking-tight text-white sm:text-lg w-full">
              <span class="font-bold block">Email sent!</span>
              <span class="text-white block">
                As we build the next generation of student + counselor interaction, we will keep you updated on our progress!
              </span>
            </h4>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <PrivacyModal bind:show={showModal} />
</template>

<style lang="less">
  .gradient {
    background: rgb(20, 3, 66);
    background: linear-gradient(112deg, rgba(20, 3, 66, 1) 0%, rgba(40, 40, 96, 1) 50%, rgba(20, 3, 66, 1) 100%);
  }
</style>
