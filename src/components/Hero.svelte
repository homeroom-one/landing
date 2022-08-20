<script lang="ts">
  
</script>

<template>
  <div>
    <div class="polygon relative">
      <div class="text-4xl text-black text-layer">Hello world</div>
    </div>

    <!-- <div class="relative hero-bg">
      <div class="text-4xl text-black text-layer">Hello world</div>
    </div>   -->
  </div>
</template>

<style lang="less">
  .polygon {
    background-color: #6dc1dc;
    background-image: linear-gradient(112deg, #6dc1dc 0%, #a690fc 20%, #fc96bb 60%, #ffc397 100%);

    clip-path: polygon(0% 0%, 100% 0, 90% 80%, 0 95%);

    width: 100%;
    height: 700px;
    border-radius: 0 0 5px 0 / 0 0 50px 0;
    opacity: .8;
    margin-right: 20px;
  }

  .hero-bg {
    background: url('../assets/images/bg.svg') no-repeat top left;
    width: 100%;
    height: 770px;
  }

  .text-layer {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }
</style>