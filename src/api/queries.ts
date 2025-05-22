import Dragon, { DragonPayload } from "../models/dragon";
import api from "./axios";

export const fetchDragons = async (): Promise<Dragon[]> => {
  const response = await api.get("/");
  return response.data;
};

export const fetchDragonById = async (id: string): Promise<Dragon> => {
  const { data } = await api.get(`/${id}`);
  return data;
};

export const deleteDragonById = async (id: string): Promise<void> => {
  await api.delete(`/${id}`);
};

export const createDragon = async (payload: DragonPayload) => {
  const { data } = await api.post("/", payload);
  return data;
};

export const updateDragonById = async (payload: DragonPayload & { id: string }) => {
  const { id, ...data } = payload;
  const response = await api.put(`/${id}`, data);
  return response.data;
};
