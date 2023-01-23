import usePosts from "./usePosts";
import { Fragment } from "react";

function Post(props)
{

    const posts = usePosts("getPostsByType" , props.postType);

    console.log(props.postType)
    console.log(posts)

    var tailwindStrHeader = "";
    var tailwindStrContainer = "";

    if (props.postType === "project"){
        tailwindStrHeader = "font-xbr px-1 py-1 mx-2 my-2 text-white text-center text-3xl rounded-lg bg-gradient-to-t from-yellow-500 to-purple-500"
        tailwindStrContainer = "shadow-2xl px-8 py-2 mx-4 my-8 m-auto container rounded-lg bg-gradient-to-b from-red-200 to-gray-600";
    } else if (props.postType === "diary"){
        tailwindStrHeader = "font-xbr px-1 py-1 mx-2 my-2 text-white text-center text-3xl rounded-lg bg-gradient-to-t from-blue-500 to-green-500"
        tailwindStrContainer = "shadow-2xl px-8 py-2 mx-4 my-8 m-auto container rounded-lg bg-gradient-to-r  from-blue-500 to-red-500";
    }

    if (posts) {

    var listPosts = posts.map(function(post){
        return(
            <div className={tailwindStrContainer}>
                <div className={tailwindStrHeader}  >
                    {post.header}
                </div>
                <div className="w-24 text-white text-center px-2 py-2 mx-2 my-2 rounded-lg bg-gradient-to-r from-black to-gray-600">
                    {post.dateOfPost}
                </div>
                <div className="px-2 py-2 text-black rounded-lg bg-white">
                    {post.documentContent}
                </div>
            </div>
        );
    })

    return(<Fragment>{listPosts}</Fragment>)
}
};


export default Post;