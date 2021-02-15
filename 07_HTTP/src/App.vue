<template>
  <div class="container">
    <AppAlert
      :alert="alert"
      @close="alert = null"
    />
    <form class="card" @submit.prevent="cratePerson">
      <h2>Work with HTTP</h2>

      <div class="form-control">
        <label>Insert your name
          <input
            v-model.trim="name"
            type="text"
            id="name">
        </label>
      </div>

      <button
        :disabled="!name"
        class="btn primary"
      >Create
      </button>
    </form>

    <AppLoader
      v-if="loading"
    />

    <AppPeopleList
      v-else
      :people="people"
      @load="loadPeopleList"
      @remove="removePerson"
    />
  </div>
</template>

<script>
import AppPeopleList from "@/AppPeopleList";
import AppAlert from "@/AppAlert";
import AppLoader from "@/AppLoader";
import axios from "axios";

const url = 'https://vue-with-http-ae441-default-rtdb.firebaseio.com/people.json';

export default {
  components: {
    AppPeopleList,
    AppAlert,
    AppLoader
  },
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false,
    }
  },
  async mounted() {
    await this.loadPeopleList();
  },
  methods: {
    async cratePerson() {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.name,
        })
      })

      const fbData = await response.json();

      this.people.push({
        firstName: this.name,
        id: fbData.name
      })
      this.name = '';
    },
    async loadPeopleList() {
      try {
        this.loading = true;
        const {data} = await axios.get(url);
        if (!data) {
          throw new Error('There is no people on the list.')
        }
        setTimeout(() => {
          this.people = Object.keys(data).map(key => {
            return {
              ...data[key],
              id: key,
            }
          })
          this.loading = false;
        }, 1500)
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Error',
          text: e.message,
        }
        this.loading = false;
      }
    },
    async removePerson(id) {
      try {
        const person = this.people.find(person => person.id = id).firstName;
        await axios.delete(`https://vue-with-http-ae441-default-rtdb.firebaseio.com/people/${id}.json`,)
        this.people = this.people.filter(person => person.id !== id);
        this.alert = {
          type: 'primary',
          title: 'Success',
          text: `${person} successfully removed`,
        }
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Error',
          text: e.message,
        }
      }
    }
  }
}
</script>

<style>

</style>
