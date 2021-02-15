<template>
  <div v-if="people.length">
    <div
      v-for="person in people"
      :key="person.id"
      class="card inline"
    >
      <h3>{{ person.firstName }}</h3>
      <button
        @click="$emit('remove', person.id)"
        class="btn danger">Delete</button>
    </div>
  </div>
  <div
    class="card center"
    v-else>
    <h4>There is no people</h4>
    <button class="btn" @click="$emit('load')">Load the list</button>
  </div>
</template>

<script>
export default {
  name: "AppPeopleList",
  emits: ['load', 'remove'],
  props: {
    people: Array,
  }
}
</script>

<style scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
