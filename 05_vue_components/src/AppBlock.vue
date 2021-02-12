<template>
<div class="card">
  <slot name="header"></slot>
  <slot name="default">No Text</slot>
  <slot name="footer"></slot>
</div>
</template>

<script>
export default {
name: "AppBlock"
}
</script>

<style scoped>

</style>
