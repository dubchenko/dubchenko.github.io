<template>
  <header class="py3">
    <div class="flex items-center">
      <the-logo class="mr2" />
      <span class="h3 bold">Егор Дубченко</span>
    </div>
  </header>
</template>

<script>
import TheLogo from '@/components/TheLogo'

export default {
  name: 'TheHeader',
  components: {
    TheLogo
  }
}
</script>
