<template>
  <header class="flex items-center py2">
    <nuxt-link
      class="link-main flex items-center mr2"
      to="/"
    >
      <EdLogo />
      <h5 class="h5 caps bold ml2 my0">
        Егор Дубченко
      </h5>
    </nuxt-link>
    <!-- <nuxt-link
      class="h5 caps bold"
      to="/notes"
    >
      Заметки
    </nuxt-link> -->
  </header>
</template>

<script>
import EdLogo from '@/components/EdLogo'

export default {
  name: 'AppHeader',
  components: {
    EdLogo
  }
}
</script>

<style lang="scss" scoped>

  .link-main {
    svg {
      color: var(--theme-primary);
    }

    &:hover {
      svg {
        animation: color_change 2.25s infinite alternate;
      }
    }
  }

  @keyframes color_change {
    0% {
      color: var(--theme-primary);
    }

    20% {
      color: #0ff;
    }

    40% {
      color: hsl(120, 100%, 40%);
    }

    60% {
      color: hsl(260, 100%, 80%);
    }

    80% {
      color: hsl(180, 100%, 57%);
    }

    100% {
      color: hsl(350, 100%, 50%);
    }
  }

</style>
