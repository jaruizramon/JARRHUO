import usePosts from "./usePosts";
import { Fragment } from "react";

function Post(props)
{
    // call REST api to get post by type either "diary" or "project"
    const posts = usePosts("getPostsByType" , props.postType);

    console.log(props.postType)
    console.log(posts)

    var tailwindPostTypeStyle = "";

    if (props.postType === "project"){
        tailwindPostTypeStyle = " bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl";
    } else if (props.postType === "diary"){
        tailwindPostTypeStyle = " bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl";
    }

    if (posts) {

    var listPosts = posts.map(function(post){
        return(
            <div className={"shadow-2xl px-2 py-2 w-5/6 mx-auto my-8 container rounded-lg" + tailwindPostTypeStyle}>
                <div className="font-consolas px-1 py-1 mx-2 my-2 text-white text-center text-3xl rounded-lg bg-black"  >
                    {post.header}
                </div>
                <div className="w-24 font-consolas text-white text-center px-2 py-2 mx-2 my-2 rounded-lg bg-gradient-to-r from-black to-gray-600">
                    {post.dateOfPost}
                </div>
                <div className="break-all px-2 py-2 text-black rounded-lg bg-white">
                    {post.documentContent}
                </div>
            </div>
        );
    })

    return(<Fragment>{listPosts}</Fragment>)
}
};


export default Post;