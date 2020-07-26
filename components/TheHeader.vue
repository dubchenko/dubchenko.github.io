<template>
  <header class="flex items-center">
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
    <!-- <span
      class="ml-auto"
      @click="changeTheme()"
    >
      Color mode
    </span> -->
  </header>
</template>

<script>
import TheLogo from '@/components/TheLogo'

const colorModes = {
  black: {
    text: '#fff',
    background: '#000',
    primary: '#0ff',
    secondary: '#0fc',
    accent: '#f0f',
    muted: '#111',
    gray: '#888'
  },
  dark: {
    text: '#fff',
    background: 'hsl(180, 5%, 15%)',
    primary: 'hsl(180, 100%, 57%)',
    secondary: 'hsl(50, 100%, 57%)',
    accent: 'hsl(310, 100%, 57%)',
    muted: 'hsl(180, 5%, 5%)',
    gray: 'hsl(180, 0%, 70%)'
  },
  deep: {
    text: '#fff',
    background: 'hsl(230,25%,18%)',
    primary: 'hsl(260, 100%, 80%)',
    secondary: 'hsl(290, 100%, 80%)',
    highlight: 'hsl(260, 20%, 40%)',
    accent: 'hsl(290, 100%, 80%)',
    muted: 'hsla(230, 20%, 0%, 20%)',
    gray: 'hsl(210, 50%, 60%)'
  },
  hack: {
    text: 'hsl(120, 100%, 75%)',
    background: 'hsl(120, 20%, 10%)',
    primary: 'hsl(120, 100%, 40%)',
    secondary: 'hsl(120, 50%, 40%)',
    accent: 'hsl(120, 100%, 90%)',
    muted: 'hsl(120, 20%, 7%)',
    gray: 'hsl(120, 20%, 40%)'
  },
  pink: {
    text: 'hsl(350, 80%, 10%)',
    background: 'hsl(350, 100%, 90%)',
    primary: 'hsl(350, 100%, 50%)',
    secondary: 'hsl(280, 100%, 50%)',
    accent: 'hsl(280, 100%, 20%)',
    muted: 'hsl(350, 100%, 88%)',
    gray: 'hsl(350, 40%, 50%)'
  }
}

export default {
  name: 'TheHeader',
  components: {
    TheLogo
  },
  methods: {
    changeTheme () {
      const root = document.body

      const avaliableModes = Object.keys(colorModes)

      const currentMode = localStorage.getItem('theme-mode') || avaliableModes[0]

      const currentModeIndex = avaliableModes.indexOf(currentMode)

      const nextMode = avaliableModes[(currentModeIndex + 1) % avaliableModes.length]

      for (const [variable, value] of Object.entries(colorModes[nextMode])) {
        root.style.setProperty(`--theme-${variable}`, value)
      }

      localStorage.setItem('theme-mode', nextMode)
    }
  }
}
</script>
