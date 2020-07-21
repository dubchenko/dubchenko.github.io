<template>
  <div class="px3 lg-px4">
    <TheHeader />
    <main class="py3">
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
