import usePosts from "./usePosts";
import { Fragment } from "react";

function Post(props)
{

    const posts = usePosts("getPostsByType" , props.postType);

    console.log(props.postType)
    console.log(posts)

    if (posts) {

    var listPosts = posts.map(function(post){
        return(
            <div className="px-8 py-2 mx-2 my-2 m-auto flex-row container rounded-lg bg-gradient-to-r from-indigo-500 to-purple-5000">
                <div className="font-xbr px-2 py-2 mx-2 my-2 text-white text-center rounded-lg bg-gradient-to-t from-indigo-500 to-purple-500">
                    {post.header}
                </div>
                <div className=" text-white text-center px-2 py-2 mx-2 my-2 rounded-lg bg-gradient-to-r from-black to-gray-600">
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