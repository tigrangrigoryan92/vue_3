<template>
<div class="alert" :class="type">
  <div class="alert-title">{{title}}</div>
  <p>{{text}}</p>
  <button
    v-if="closeable"
    :class="type"
    class="btn"
    @click="$emit('close')"
  >Close</button>
</div>
</template>

<script>
export default {
  name: "AppAlert",
  props: {
    title: String,
    text: String,
    type: {
      type: String,
      validate() {
        return ['primary', 'danger', 'warning']
      },
      default: 'primary',
      required: false,
    },
    closeable: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  emits: ['close']
}
</script>

<style scoped>

</style>
