import { useQuery } from "@tanstack/react-query";
import { fetchDragonById, fetchDragons } from "../api/queries";
import Dragon from "../models/dragon";

export const useFetchDragons = () => {
  return useQuery<Dragon[]>({
    queryKey: ["dragons"],
    queryFn: fetchDragons,
  });
};

export const useFetchDragonById = (id: string | undefined) => {
  return useQuery<Dragon>({
    queryKey: ["dragon", id],
    queryFn: () => fetchDragonById(id as string),
    enabled: !!id,
  });
};
