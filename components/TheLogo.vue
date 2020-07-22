<template>
  <div class="ed-logo">
    <span>ед</span>
  </div>
</template>

<script>
export default {
  name: 'TheLogo'
}
</script>

<style lang="scss" scoped>

  .ed-logo {
    width: 2.25em;
    height: 2.25em;
    background-color: var(--theme-accent);
    border-radius: 0.125rem;
    position: relative;
    color: var(--theme-primary);
    line-height: 1;
    font-weight: 500;
    font-size: 0.75rem;
    transition:
      background-color 0.25s ease-in-out,
      color 0.25s ease-in-out;

    span {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
    }
  }

</style>
