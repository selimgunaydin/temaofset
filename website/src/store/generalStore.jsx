import axios from "axios";
import { create } from "zustand";

export const generalStore = create((set) => ({
  categories: null,
  options: null,

  getCategories: async () => {
    axios
      .get(`http://api.temaofset.online/api/Categories`)
      .then((response) => {
        set({ categories: response.data });
        loaderStore.getState().setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getOptions: async () => {
    axios
      .get(`http://api.temaofset.online/api/SiteOption`)
      .then((response) => {
        set({ options: response.data });
        setTimeout(() => {
          loaderStore.getState().setLoader(false);
        }, 2500);
      })
      .catch((error) => {
        console.log(error);
      });
  },
}));
export const loaderStore = create((set) => ({
  loader: false,
  setLoader: (status) => {
    set({ loader: status });
  },
}));
