<template>
  <div class="container">
    <AppAlert
      v-if="alert"
      title="Warning"
      text="Some Important text"
      type="warning"
      closeable
      @close="alert=false"
    />
    <div class="card">
      <button
        class="btn primary"
        @click="toggleAlert"
      >{{ alert ? 'Close' : 'Show' }} Message
      </button>
    </div>

    <AppBlock
    />
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert";
import AppBlock from "@/components/AppBlock";
import alertMixin from "@/alertMixin";

export default {
  components: {AppBlock, AppAlert},
  mixins: [alertMixin]
}
</script>

