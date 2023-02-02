import { useEffect, useState } from "react";
import axios from "axios";

export default function usePosts(requestType, postType){
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        if (requestType === "getPostsByType") {
          const linkString = `http://192.168.86.180:8080/posts/${postType}`
          axios.get(linkString)
          .then(response => {
            const posts = response.data;
            setPosts(posts);
          });
        }
      }, [postType, requestType]);

    
      return posts;
    }
    

