import { defineStore } from "pinia";
import { User } from "../generated/graphql-sdk";

export const useAuthStore = defineStore({
  id: "auth",
  state: (): { user: User | null } => {
    return {
      user: null,
    };
  },
});
