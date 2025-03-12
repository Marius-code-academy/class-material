import React from "react";
import useFetchData from "../../hooks/useFetchData";

export default function Posts() {
  const { data: posts, error: postsError, isLoading: isLoadingPosts } = useFetchData("https://jsonplaceholder.typicode.com/posts");
  const { data: comments, error: commentsError, isLoading: isLoadingComments } = useFetchData("https://jsonplaceholder.typicode.com/comments");

  return (
    <div>
      {postsError && <div>{postsError}</div>}
      {isLoadingPosts ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
}
