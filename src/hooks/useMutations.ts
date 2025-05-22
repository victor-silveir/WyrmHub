import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDragon, deleteDragonById, updateDragonById } from "../api/queries";

export const useDeleteDragon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDragonById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dragons"] });
    },
  });
};

export const useCreateDragon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDragon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dragons"] });
    },
  });
};

export const useUpdateDragonById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDragonById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dragons"] });
    },
  });
};
