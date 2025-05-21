import { useQuery } from "@tanstack/react-query";
import { fetchDragons } from "../api/queries";
import Dragon from "../models/dragon";

export const useFetchDragons = () => {
  return useQuery<Dragon[]>({
    queryKey: ["dragons"],
    queryFn: fetchDragons,
  });
};
