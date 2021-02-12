<template>
  <div
    class="card mb-1">
    <h2>{{ title }}</h2>
    <AppButton
      @action="open"
      :text="!isCardOpen ? 'Open' : 'Close'"
    >
      {{ !isCardOpen ? 'Open' : 'Close' }}
    </AppButton>
    <AppButton
      v-if="wasRead"
      color="danger"
      text="Sigh not read"
      @action="$emit('unmark', id)"
    >
      Sigh not read
    </AppButton>
    <div v-if="isCardOpen">
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sit!</p>
      <AppButton
        v-if="!wasRead"
        color="primary"
        text="Read"
        @action="mark"
      >
        Read
      </AppButton>

      <AppNewsList
      />
    </div>
  </div>
</template>

<script>
import AppButton from "@/AppButton";
import AppNewsList from "@/AppNewsList";

export default {
  name: "AppNews",
  components: {
    AppButton,
    AppNewsList
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(v) {
        return v === true || v === false;
      }
    },
    wasRead: {
      type: Boolean,
      default: false,
    },
  },
  // emits: [],
  emits: {
    // 'open-card'(number) {
    //   if (number) {
    //     return true;
    //   }
    //   console.log('No data in open-card emit');
    // },
    'open-card': null,
    'article-mark'(id) {
      if (id) {
        return true;
      }
      console.log('There is no ID for article-mark emit');
    },
    unmark(id) {
      if (id) {
        return true;
      }
      console.log('There is no ID for unmark emit');
    },
  },
  data() {
    return {
      isCardOpen: this.isOpen,
    }
  },
  methods: {
    open() {
      this.isCardOpen = !this.isCardOpen;
      if (this.isCardOpen) {
        this.$emit('open-card');
      }
    },
    mark() {
      this.open();
      this.$emit('article-mark', this.id);
    },
    // unmark() {
    //   this.open();
    //   this.$emit('unmark', this.id);
    // }
  },
}
</script>

<style scoped>

</style>
