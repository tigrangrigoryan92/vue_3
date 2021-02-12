<template>
  <div class="container pt-1 ">
    <div class="card mb-1">
      <h2>Slots</h2>
    </div>

    <AppList>
      <template #default="{idx, iter}">
        <span
          style="color: orange"
        >
          <strong>{{ idx }}. </strong>
          Item - {{ iter }}
        </span>
      </template>
    </AppList>

    <AppBlock>
      <p>Lorem ipsum dolor sit amet?</p>

      <template v-slot:header>
        <h3>Header</h3>
      </template>

      <template #footer>
        <hr>
        <small>It is footer</small>
      </template>
    </AppBlock>
  </div>
</template>

<script>
import AppBlock from "@/AppBlock";
import AppList from "@/AppList";

export default {
  name: 'App',
  components: {
    AppBlock,
    AppList
  }

}
</script>

<style scoped>
</style>
