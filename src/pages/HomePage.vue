<template>
  <div class="container">
    <div>
      <h1>This is the homepage</h1>
      <router-link tag="a" class="btn btn-primary" :to="{ name: 'login' }">
        Login
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>