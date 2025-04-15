import { queryOptions } from "@tanstack/react-query";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const getCommentsOptions = (postId: number) => {
  const options = queryOptions({
    queryFn: () => getComments(postId),
    queryKey: ["comments", postId],
  });

  return options;
};

const getComments = async (postId: number): Promise<Comment[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  const data = await response.json();
  return data;
};
