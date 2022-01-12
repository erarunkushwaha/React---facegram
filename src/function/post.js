import axios from "axios";

const URL = process.env.REACT_APP_API;

export const getAllPost = async () => {
  return await axios.get(`${URL}/posts`);
};

export const createPost = async (data) => {
  const res = await axios.post(`${URL}/posts`, data, {});
  return res.data;
};

export const removePost = async (postId, imageId) =>
  await axios.delete(`${URL}/posts/${postId}`, { data: { imageId } }, {});
