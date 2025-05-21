import Dragon from "../models/dragon";
import api from "./axios";

export const fetchDragons = async (): Promise<Dragon[]> => {
  const response = await api.get("/");
  return response.data;
};
