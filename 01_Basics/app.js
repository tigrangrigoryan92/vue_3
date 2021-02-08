const App = {
  data() {
    return {
      counter: 0,
      appTitle: 'Counter',
      title: 'To Do List',
      placeholder: 'Add a task',
      inputValue: '',
      notes: ['Note 1', 'Note 2', 'Note 3'],
    }
  },
  computed: {
    notesTotalCount() {
      return this.notes.length;
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    deleteCurrentNote(idx) {
      this.notes.splice(idx, 1)
    }
  },
  watch: {
    inputValue(value) {
      console.log('Input value', value);
    }
  }
};

Vue.createApp(App).mount('#app')

