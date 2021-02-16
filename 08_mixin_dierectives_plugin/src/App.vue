<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="$alert('This is working)))')">Alert</button>
      <hr>
      <button class="btn" @click="changeLanguage">{{ $i18n('app.changeBtn') }}</button>
      <hr>
      <button class="btn primary" @click="modal = true">Open Modal</button>

      <teleport to="body">
        <AppModal v-if="modal" @closeModal="modal=false"/>
      </teleport>
    </div>
  </div>
</template>

<script>

import AppModal from "@/components/AppModal";

export default {
  components: {AppModal},
  data() {
    return {
      isDefaultLang: true,
      modal: false,
    }
  },
  computed: {},
  directives: {},
  inject: ['changeI18N'],
  methods: {
    changeLanguage() {
      this.isDefaultLang = !this.isDefaultLang;
      let currentLanguage = this.isDefaultLang ? 'am' : 'en';
      this.changeI18N(currentLanguage);
      this.$forceUpdate();
    }
  }
}
</script>

