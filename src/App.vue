<template>
  <div id="app">
    <router-view></router-view>
    <loading :class="{ show: isLoading }" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loading from "./components/LoadingComponent.vue";
export default {
  name: "App",
  components: {
    Loading,
  },
  created() {
    this.checkLogin();
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  methods: {
    ...mapActions(["checkLogin"]),
  },
};
</script>

<style scoped>
</style>
