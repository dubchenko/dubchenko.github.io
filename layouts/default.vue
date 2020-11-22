<template>
  <div class="layout-default p2">
    <AppHeader />
    <main class="flex flex-1">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>

  .layout-default {
    display: flex;
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    flex-direction: column;

    main {
      flex: 1;
    }
  }

</style>
