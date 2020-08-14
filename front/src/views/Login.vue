<template>
  <router-view />
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <p v-if="user">Username: {{ user.username }}</p>
    <p v-else>Not connected</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import sdk from "../sdk";
import { useAuthStore } from "../store/auth";

export default defineComponent({
  name: "App",
  setup() {
    const authStore = useAuthStore();

    const login = () => {
      sdk
        .login({
          email: "luc@varoqui.org",
          password: "azerty",
        })
        .then((data) => {
          if (data.login) {
            authStore.user = data.login;
          }
        });
    };

    const logout = () => {
      sdk.logout().then(() => {
        authStore.user = null;
      });
    };

    return {
      user: computed(() => authStore.user),
      login,
      logout,
    };
  },
});
</script>

<style></style>
