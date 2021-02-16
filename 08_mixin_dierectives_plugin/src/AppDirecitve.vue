<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[property].hover="value">Directives</h2>

      <div class="form-control">
        <label>Property
          <input
            v-model="property"
            type="text"
            v-focus
          >
        </label>
        <label>Value
          <input
            v-model="value"
            type="text"
          >
        </label>
      </div>
    </div>
  </div>
</template>

<script>

import focusDirective from "@/focusDirective";
import colorDirective from "@/colorDirective";

export default {
  data() {
    return {
      property: '',
      value: '',
    }
  },
  computed: {
    typeVal() {
      return this.type === 'color' ? 'backgroundColor' : 'color';
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  }
}
</script>

