import axios from "axios";
import { create } from "zustand";

export const generalStore = create((set) => ({
  options: null,

  getOptions: async () => {
    axios
      .get(`http://api.temaofset.online/api/SiteOption`)
      .then((response) => {
        set({ options: response.data });
        setTimeout(() => {
          loaderStore.getState().setLoader(false);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  },
}));
export const loaderStore = create((set) => ({
  loader: true,
  setLoader: (status) => {
    set({ loader: status });
  },
}));
