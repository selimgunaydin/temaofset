import axios from "axios";
import { create } from "zustand";

export const generalStore = create((set) => ({
  categories: null,
  options: null,
  sliders: null,
  baseUrl:"http://api.temaofset.online",

  getCategories: async () => {
    axios
      .get(`${generalStore.getState().baseUrl}/api/Categories`)
      .then((response) => {
        set({ categories: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getSliders: async () => {
    axios
      .get(`${generalStore.getState().baseUrl}/api/SiteOption/Slider`)
      .then((response) => {
        set({ sliders: response.data });
        setTimeout(() => {
          loaderStore.getState().setLoader(false);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getOptions: async () => {
    axios
      .get(`${generalStore.getState().baseUrl}/api/SiteOption`)
      .then((response) => {
        set({ options: response.data });
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
