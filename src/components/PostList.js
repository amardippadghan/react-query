import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";
import { useState } from "react";
import "../App.css";

const PostList = () => {
  const [post, setPost] = useState({
    title: "",
    tags: [],
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your post.."
          className="postbox"
          name="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <div className="tags">
          {tagsData?.map((tag, index) => (
            <div key={index}>
              <input
                name={tag}
                id={tag}
                type="checkbox"
                onChange={(e) => {
                  setPost({ ...post, tags: e.target.value });
                }}
              />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
        <button>Post</button>
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
