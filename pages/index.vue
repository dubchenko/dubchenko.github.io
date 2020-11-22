<template>
  <div class="flex flex-column justify-around max-width-3">
    <div>
      <span class="h2">
        Привет! Я живу в
        <span class="strike">
          Вологде
        </span>
        → Санкт-Петербурге и разрабатываю интерфейсы в
        <span class="strike">
          Группа «Кронштадт»
        </span>
        →
        <a
          href="http://hyperskill.org/"
          class="color-inherit text-decoration-none"
          target="_blank"
        >Hyperskill.org</a>.
      </span>
    </div>
    <div class="flex mxn1">
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

<style lang="scss" scoped>

  @keyframes strike {
    0% { width: 0; }
    100% { width: 100%; }
  }

  .strike {
    position: relative;
    display: inline-flex;
    color: var(--theme-gray);

    &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--theme-gray);
    }

    &:hover {
      color: var(--theme-text);

      &::after {
        width: 0;
      }
    }
  }

</style>
