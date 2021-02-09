const h = Vue.h;

const App = Vue.createApp({
  data() {
    return {
      title: 'Template Header'
    }
  },
  methods: {
    changeTitle() {
      console.log(this);
      this.title = 'Changed from Render'
    },
  },
  // template: `
  //   <div class="card center">
  //     <h1>{{ title }}</h1>
  //     <button class="btn" @click="title='Changed'">Change</button>
  //   </div>
  // `,
  render() {
    return h('div', {
      class: 'card center'
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onClick: this.changeTitle,
      }, 'Change')
    ])
  },
  beforeCreated() {
    console.log('beforeCreated');
  },
  create() {
    console.log('created');
  },
  beforeMounted() {
    console.log('beforeMounted');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
})

// setTimeout(() => {
//   app.unmount();
// }, 5000)


App.mount('#app');

// const data = {
//   title: 'Title',
//   msg: 'Message',
// };
//
// const proxy = new Proxy(data, {
//   set(target, p, value, receiver) {
    // console.log(target);
    // console.log(p);
    // console.log(value);
    // console.log(receiver);
  // }
// })


