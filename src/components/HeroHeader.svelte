<script lang="ts">
  import type { Hero } from '../models'
  // import { sendEmail } from '../helpers'

  export let hero: Hero

  let fromMail: string

  const sendMail = async (from: string) => {
    const payload = {
      params: {
        from
      }
    }
    console.log('HeroHeader > sendMail > payload: ', JSON.stringify(payload))

    // const response = 
    
    await fetch('/api/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(response => {
      console.log('>>>>>>>>>>>>>>>> response: ', response)
    }).catch(error => {
      console.log('>>>>>>>>>>>>>>>> error: ', error)
    })

    
  }
</script>

<template>
  <div class="relative bg-sky-blue shadow-xl">
    <div class="gradient-background" />
    <div class="max-w-7xl pt-20 pb-10 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="md:grid md:grid-cols-2 md:gap-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24">
            <h1 class="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl sm:tracking-tight lg:mt-6 xl:text-6xl xl:tracking-tight">
              <span class="block">{hero.titleColorOne}</span>
              <span class="block text-midnight-900">{hero.titleColorTwo}</span>
            </h1>
            <p class="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              {hero.description}
            </p>
            <div class="mt-10 sm:mt-12">
              <form on:submit|preventDefault class="sm:max-w-xl sm:mx-auto lg:mx-0">
                Uncomment this when ready
                <div class="sm:flex">
                  <div class="min-w-0 flex-1">
                    <label for="email" class="sr-only">Email address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      bind:value={fromMail}
                    />
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="button"
                      class="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      on:click={() => sendMail(fromMail)}>Start free trial</button
                    >
                  </div>
                </div>
                <p class="mt-3 text-sm text-white sm:mt-4">
                  Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our
                  <a href="/" class="font-medium text-white"> terms of service </a>.
                </p>
              </form>

              <a
                class="relative inline-flex items-center px-6 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        </div>
        <div class="mt-12 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <!-- <img
              class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none icon-info-card"
              src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
              alt=""
            /> -->
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none icon-info-card" src={hero.graphic?.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
