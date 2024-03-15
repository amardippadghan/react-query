import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";
import "../App.css";

const PostList = () => {
  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", { page: 1 }],
    queryFn: () => fetchPosts(),
    retry: 3,
  });

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: () => fetchTags(),
  });

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Enter your post.."
          className="postbox"
          name="title"
        />
        <div className="tags">
          {tagsData?.map((tag, index) => (
            <div key={index}>
              <input name={tag} id={tag} type="checkbox" />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
      </form>

      {isLoading && <div>Loading...</div>}
      {isError && <div>{error?.message}</div>}
      {postData?.map((post) => (
        <div key={post.id} className="post">
          <div>{post.title}</div>
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostList;
