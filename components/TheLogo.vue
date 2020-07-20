<template>
  <div class="ed-logo">
    <span>ed</span>
  </div>
</template>

<script>
export default {
  name: 'TheLogo'
}
</script>

<style lang="scss" scoped>

  .ed-logo {
    width: 2em;
    height: 2em;
    background-color: #000;
    border-radius: 1px;
    position: relative;
    color: #fff;
    line-height: 1;
    font-weight: 500;

    span {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
    }
  }

</style>
