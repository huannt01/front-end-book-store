<template>
  <div class="container">
    <div v-if="!isLogin">
      <h1>This is the homepage</h1>
      <router-link tag="a" class="btn btn-primary" :to="{ name: 'login' }">
        Login
      </router-link>
    </div>
    <div v-else>
      <h1>Hello ... {{ currentUser.name }}</h1>
      <button @click="handleLogout()" class="btn btn-warning">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLogin", "currentUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      var check = confirm("Bạn có thực sự muốn đăng xuất?");

      if (check) {
        this.logout().then((response) => {
          this.$router.push({ name: "login" });
        });
      }
    },
  },
};
</script>

<style scoped>
</style>