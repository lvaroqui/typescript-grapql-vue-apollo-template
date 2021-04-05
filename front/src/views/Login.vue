<template>
  <div v-if="user">
    <p v-if="user">Connected! Username: {{ user.username }}</p>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <div>
      <input v-model="email" type="email" />
    </div>
    <div>
      <input v-model="password" type="password" />
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import sdk from '../sdk';
import { useAuthStore } from '../store/auth';

export default defineComponent({
  name: 'App',
  setup() {
    const authStore = useAuthStore();

    const email = ref('');
    const password = ref('');

    const login = () => {
      sdk
        .login({
          email: email.value,
          password: password.value,
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
      email,
      password,
      login,
      logout,
    };
  },
});
</script>

<style></style>
