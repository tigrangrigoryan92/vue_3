<template>
  <div class="card mb-1">
    <ul>
      <li
        v-for="(item, i) in 5"
      >
        <slot
          :iter="item"
          :idx="i"
        >
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppList"
}
</script>

<style scoped>

</style>
