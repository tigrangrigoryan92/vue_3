<template>
  <div class="modal-backdrop" @click="$emit('closeModal')"></div>
  <div class="modal">
    <h3>Modal header</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eveniet officiis. Commodi, ea porro?</p>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  emits: ['closeModal']
}
</script>

<style scoped>

</style>
