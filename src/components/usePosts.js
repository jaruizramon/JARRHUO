import { useEffect, useState } from "react";
import axios from "axios";

export default function usePosts(requestType, postType, idProp){
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
      

       else if (requestType === "getPostsById") {
        if (idProp === ""){
          console.log("CANNOT GET POST BY ID: ID IS NULL")
          return null
        } else{
          const linkString = `http://192.168.86.180:8080/post/${idProp}`
          axios.get(linkString)
          .then(response => {
            const posts = response.data;
            setPosts(posts);
          });
        }

      }
    }, [idProp, postType, requestType]);
    
      return posts;
    }
    

