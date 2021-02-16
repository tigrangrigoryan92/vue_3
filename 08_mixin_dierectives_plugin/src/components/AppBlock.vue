<template>
  <div class="container">
    <AppAlert
      v-if="alert"
      title="Information!!!"
      text="Some Important Info!!!"
      type="primary"
      @close="alert=false"
    />
    <div class="card">
      <button
        class="btn primary"
        @click="toggleAlert"
      >{{ alert ? 'Close' : 'Show'}} Message</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert";
import alertMixin from "@/alertMixin";

export default {
  components: {AppAlert},
  mixins: [alertMixin]
}
</script>

