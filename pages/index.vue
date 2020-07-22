<template>
  <div class="flex flex-column max-width-3">
    <div class="my4">
      <span class="h2">
        Привет! Я живу в
        <strike class="inline-flex gray">
          Вологде
        </strike>
        → Санкт-Петербурге и разрабатываю интерфейсы в
        <strike class="inline-flex gray">
          Группа «Кронштадт»
        </strike>
        →
        <a
          href="http://hyperskill.org/"
          class="color-inherit text-decoration-none"
          target="_blank"
        >Hyperskill.org</a>.
      </span>
    </div>
    <div class="mt4 flex mxn1">
      <a
        href="https://github.com/dubchenko"
        class="h6 caps bold color-inherit text-decoration-none mx1"
        target="_blank"
      >
        Гитхаб
      </a>
      <a
        href="http://telegram.me/dubchenko"
        class="h6 caps bold color-inherit text-decoration-none mx1"
        target="_blank"
      >
        Телеграм
      </a>
      <a
        href="mailto:dubchenkoegor@gmail.com"
        class="h6 caps bold color-inherit text-decoration-none mx1"
        target="_blank"
      >
        Почта
      </a>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Home',
  head: {
    title: '- разработчик интерфейсов'
  }
}
</script>
