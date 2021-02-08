const App = {
  data: () => ({
    title: 'Vue 3',
    myHtml: '<h4>Vue 3 App</h4>',
    person: {
      name: 'Max',
      lastName: 'Payne',
      age: 42
    },
    items: [1, 2, 3, 4, 5, 6, 7]
  }),
  computed: {},
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = '';
    }
  },
  watch: {}
};

Vue.createApp(App).mount('#app')

