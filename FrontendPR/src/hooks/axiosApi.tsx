import axios from "axios";
import { config } from "./helperApi";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const adApi = () => ({
  getAd: async () => {
    const response = await api.get("/ads", config);

    return response.data;
  },

  postAd: async (title: string, price: string, description: string) => {
    const response = await api.post(
      "/ads/create",
      {
        title: title,
        price: price,
        description: description,
      },
      config
    );

    return response.data;
  },
});
