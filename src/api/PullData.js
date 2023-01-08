import axios from "axios";
import { useEffect, useState } from "react";

const client = axios.create({
  baseURL: "localhost:9090" 
});

export default function PullData() {
    const [post, setPost] = useState(null);

    useEffect(() => {
      async function getPost() {
        const response = await client.get("/posts");
        setPost(response.data);
      }
      getPost();
    }, []);

    if (post) {
        return post;
      }
};