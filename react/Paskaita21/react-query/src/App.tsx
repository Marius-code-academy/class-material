import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { useState } from "react";
import { getCommentsOptions } from "./queryOptions/getCommentsOptions";
import { PostModel, useCreatePostMutation } from "./mutations/useCreatePostMutation";

function App() {
  const [postId, setPostId] = useState(1);

  const { data, isPending } = useQuery({
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      return data;
    },
    queryKey: ["posts"],
  });

  const { data: commentsData, isPending: isCommentsPending } = useQuery(getCommentsOptions(postId));

  const post: PostModel = {
    body: "laksjdfhlaksjdhfljkasd",
    title: "Titlte",
    userId: 2,
  };

  const { mutate } = useCreatePostMutation();

  const handleMutateClick = () => {
    mutate(post, {
      onSuccess: (data) => {
        alert("Post created successfully");
      },
      onError: (err) => {
        alert("Error creating post");
      },
    });
  };

  return (
    <div>
      <button onClick={handleMutateClick}>Mutate</button>
      <button onClick={() => setPostId((prev) => prev + 1)}>Increment post ID</button>
      <button onClick={() => setPostId((prev) => prev - 1)}>Decrement post ID</button>
      {isCommentsPending ? <h1>Loading...</h1> : JSON.stringify(commentsData)}
    </div>
  );
}

export default App;
