<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goToLoginPage">Обратно к логину</button>
    <button class="btn" @click="$router.push('/')">Обратно к логину 2</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLoginPage() {
      this.$router.push('/')
    }
  }
}
</script>
