<template>
  <header class="py2 lg-px4 flex items-center">
    <nuxt-link
      class="flex items-center mr2"
      to="/"
    >
      <the-logo class="mr2" />
      <h4 class="h5 caps bold">
        Егор Дубченко
      </h4>
    </nuxt-link>
    <nuxt-link
      class="h5 caps bold"
      to="/notes"
    >
      Заметки
    </nuxt-link>
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
