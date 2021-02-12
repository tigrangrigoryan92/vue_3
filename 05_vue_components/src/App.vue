<template>
  <div class="container pt-1 ">
    <div class="card mb-1">
      <h2>Dynamic and Async Components</h2>

      <app-async-component />
      <app-button
        ref="myBtn"
        :color="oneColor"
        @action="active = 'one'"
      >One
      </app-button>
      <app-button
        :color="twoColor"
        @action="active = 'two'"
      >Two
      </app-button>
    </div>

    <!--    <app-text-one-->
    <!--      v-if="active === 'one'"-->
    <!--    ></app-text-one>-->
    <!--    <app-text-two-->
    <!--      v-if="active === 'two'"-->
    <!--    ></app-text-two>-->

    <keep-alive>
      <component
        :is="componentName"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from "@/AppButton";
import AppTextOne from "@/AppTextOne";
import AppTextTwo from "@/AppTextTwo";

export default {
  name: 'App',
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  },
  data() {
    return {
      active: 'one'
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.componentName = 'new component name'
    // }, 3000)
    console.log(this.$refs.myBtn);
  },
  computed: {
    // componentName() {
    //   return `app-text-${this.active}`;
    // },
    componentName: {
      get() {
        return `app-text-${this.active}`;
      },
      set(value) {
        console.log('componentName', value);
      }
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  }

}
</script>

<style scoped>
</style>
