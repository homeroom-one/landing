<script lang="ts">
  // Svelte
  import { fade } from 'svelte/transition'
  // Packages
  import * as EmailValidator from 'email-validator'
  // Models
  import type { Hero } from '../models'
  // Components
  import PrivacyModal from './PrivacyModal.svelte'

  export let hero: Hero
  let show: boolean = false

  let showModal: boolean = show

  let toMail: string = ''
  let mailSent: boolean = false
  let emailError: boolean = false
  let errorMessage: string = ''

  const sendMail = async () => {
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

    const response = await fetch('/api/notification/mail/send', opts)
    const blob = await response.json()

    if (blob.status === 200) {
      mailSent = !mailSent
      toMail = 'Success!'
    } else {
      mailSent = false
      emailError = !emailError
      errorMessage = 'There was a problem sending the email'
      console.log(blob)
    }
  }

  const toggleModal = () => {
    showModal = true
  }
</script>

<template>
  <div class="relative bg-sky-blue shadow-xl">
    <div class="gradient-background" />
    <div class="max-w-7xl pt-20 pb-10 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="md:grid md:grid-cols-2 md:gap-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24">
            <h1 class="mt-4 text-5xl tracking-tight font-bold text-white sm:mt-5 sm:tracking-tight lg:mt-6 xl:tracking-tight">
              <span class="block">{hero.titleColorOne}</span>
              <span class="mt-4 block text-midnight-900">{hero.titleColorTwo}</span>
            </h1>
            <p class="mt-3 text-lg text-white sm:mt-5 sm:text-xl lg:text-xl xl:text-xl">
              {hero.description}
            </p>
            <div class="mt-10 relative h-32">
              {#if !mailSent}
                <form on:submit|preventDefault transition:fade={{ duration: 300 }} class="sm:max-w-xl sm:mx-auto lg:mx-0 absolute w-full">
                  <div class="sm:flex">
                    <div class="min-w-0 flex-1">
                      <label for="email" class="sr-only">Email address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        bind:value={toMail}
                      />
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="button"
                        class="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        on:click={sendMail}>Notify me</button
                      >
                    </div>
                  </div>

                  {#if emailError}
                    <p class="mt-1 text-base sm:mt-1 text-red-600" transition:fade={{ duration: 300 }}>{errorMessage}</p>
                  {/if}

                  <p class="mt-3 text-sm text-white sm:mt-4">
                    We care about the protection of your data. Read our
                    <button on:click={toggleModal} class="underline">Privacy Policy.</button>
                  </p>
                </form>
              {:else}
                <div class="sm:max-w-xl sm:mx-auto lg:mx-0 absolute w-full" transition:fade={{ delay: 300, duration: 300 }}>
                  <h4 class="text-base tracking-tight text-white sm:text-lg">
                    <span class="text-midnight-900 font-bold block">Email sent!</span>
                    <span class="block">
                      As we build the next generation of student + counselor interaction, 
                      we will keep you updated on our progress!
                    </span>
                  </h4>
                </div>
              {/if}
            </div>
          </div>
        </div>
        <div class="mt-12 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none icon-info-card" src={hero.graphic?.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <PrivacyModal bind:show={showModal} />
</template>

<style lang="less">
  .bg-sky-blue {
    background-color: #6dc1dc;
  }
  .gradient-background {
    // background-image: linear-gradient(112deg, #6dc1dc 0%, #a690fc 20%, #fc96bb 60%, #ffc397 100%);
    background-image: linear-gradient(112deg, #ffc397 0%, #fc96bb 20%, #a690fc 60%, #6dc1dc 100%);

    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    margin-right: 20px;
  }

  // .polygon {
  //   background-color: #6dc1dc;
  //   // background-image: linear-gradient(112deg, #6dc1dc 0%, #a690fc 20%, #fc96bb 60%, #ffc397 100%);
  //   background-image: linear-gradient(112deg, #ffc397 0%, #fc96bb 20%, #a690fc 60%, #6dc1dc 100%);

  //   clip-path: polygon(0% 0%, 100% 0, 90% 80%, 0 95%);

  //   position: absolute;
  //   z-index: 0;
  //   width: 100%;
  //   height: 700px;
  //   opacity: 0.8;
  //   margin-right: 20px;
  // }
</style>
