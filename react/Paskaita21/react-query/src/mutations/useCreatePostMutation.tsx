import { useMutation, useQueryClient } from "@tanstack/react-query";

export type PostModel = {
  userId: number;
  title: string;
  body: string;
};

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: PostModel) => createPost(post),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
};

const createPost = async (post: PostModel) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/pts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  const data = await response.json();

  return data;
};
