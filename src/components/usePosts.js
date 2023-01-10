import { useEffect, useState } from "react";
import axios from "axios";

export default function usePosts(requestType, postType){
    const [posts, setPosts] = useState(null);

    var linkString = `http://localhost:8080/posts/${postType}`;

    console.log(linkString)

    useEffect(() => {
        if (requestType === "getPostsByType") {
          axios.get(linkString)
          .then(response => {
            const posts = response.data;
            setPosts(posts)
          });
        }
      }, [requestType, postType]);

    
      return posts;
    }
    

