<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sdk from "./sdk";
import { useAuthStore } from "./store/auth";

export default defineComponent({
  name: "App",
  setup() {
    // Check if user is connected
    sdk.me().then((data) => {
      if (data.me) {
        useAuthStore().user = data.me;
      }
    });
  },
});
</script>
