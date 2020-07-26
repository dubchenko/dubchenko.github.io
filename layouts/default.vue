<template>
  <div class="layout-default">
    <TheHeader class="p2" />
    <main class="p2">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>

  .layout-default {
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
