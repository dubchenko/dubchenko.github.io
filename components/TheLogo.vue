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
    background-color: #000;
    border-radius: 0.125rem;
    position: relative;
    color: #76fec5;
    line-height: 1;
    font-weight: 500;
    font-size: 0.875rem;

    span {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
    }
  }

</style>
