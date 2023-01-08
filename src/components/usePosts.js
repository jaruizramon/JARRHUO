import { useEffect, useState } from "react";
import axios from "axios";

export default function usePosts(requestType, postType ){
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        if (requestType === "getPostByType") {
          axios.get(`http://localhost:8080/posts/${postType}`).then(response => {
            const posts = response.data;
            console.log(response.data);
            setPosts(posts);
          });
        }
      }, [requestType, postType]);
    
      return posts;
    }
    

