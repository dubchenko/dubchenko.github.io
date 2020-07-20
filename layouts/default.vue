<template>
  <div class="px3">
    <TheHeader />
    <div class="py3">
      <Nuxt />
    </div>
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
