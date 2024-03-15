import axios from "axios";

const fetchPosts = async (page) => {
  const response = await fetch(
    `http://localhost:3000/posts?_sort=-id&${
      page ? `_page=${page}&_per_page=5` : ""
    }`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const postData = await response.json();
  return postData;
};

const fetchTags = async () => {
  const tagsData = await axios.get("http://localhost:3000/tags");
  console.log("axios data ", tagsData.data);
  return tagsData.data;
};

const addPost = async (post) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
};

export { fetchPosts, fetchTags, addPost };
