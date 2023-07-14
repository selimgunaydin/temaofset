import axios from "axios";
import { Base64 } from "js-base64";
import { create } from "zustand";

export const generalStore = create((set) => ({
  categories: null,
  options: null,

  // getCategories: async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://api.mssdev.online/api/Categories"
  //     );
  //     set({ categories: response.data });
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // },
  getOptions: async () => {
    axios
      .get(`http://api.temaofset.online/api/SiteOption`)
      .then((response) => {
        set({ options: response.data });
      })
      .catch((error) => [console.log(error)]);
  },
}));
