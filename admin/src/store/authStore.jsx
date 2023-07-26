import { create } from "zustand";
import axios from "axios";
import { generalStore } from "./generalStore";


export const authStore = create((set) => ({
  authText: null,
  loginStatus: null,
  isLoggedIn: null,
  loginFetch: async (uname, password) => {
    try {
      const response = await axios.post(
        `${generalStore.getState().baseUrl}/api/Auth/Login`,
        {
          username: uname,
          password: password,
        }
      );
      set({
        authText: "Giriş başarılı, yönlendiriliyorsunuz..",
        loginStatus: 200,
      });
      set({ isLoggedIn: true });
      localStorage.setItem("user_token", response.data.accessToken);
      localStorage.setItem("refresh_token", response.data.refreshToken);
    } catch (error) {
      console.log(error.response.data.ErorrMessage);
      set({
        authText: error.response.data.ErorrMessage,
        loginStatus: error.response.status,
      });
    }
  },

  logout: async () => {
    try {
      localStorage.removeItem("user_token");
      set({
        authText: null,
        loginStatus: null,
      });
    } catch (error) {
      localStorage.removeItem("user_token");
      console.log(error);
    }
  },
}));
