import usePosts from "./usePosts";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ThisPost from "./ThisPost";

function Post(props) {
  // call REST api to get post by type either "diary" or "project"
  const posts = usePosts("getPostsByType", props.postType);

  console.log(props.postType);
  console.log(posts);

  var tailwindPostTypeStyle = "";

  if (props.postType === "project") {
    tailwindPostTypeStyle =
      " bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl";
  } else if (props.postType === "diary") {
    tailwindPostTypeStyle =
      " bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl";
  }

  if (posts) {
    var listPosts = posts.map(function (post) {
      return (
        <div
          className={
            "shadow-2xl px-1 py-1 w-5/6 mx-auto my-8 container rounded-lg" +
            tailwindPostTypeStyle
          }
        >
          <div className="font-consolas  mx-2 my-2 text-white text-center lg:text-3xl md:text-2xl sm:text-xl rounded-lg bg-black">
            {post.header}
          </div>
          <div className="grid grid-cols-2">
            <div className="w-32 font-consolas text-white text-center  mx-2 my-2 rounded-lg bg-gradient-to-r  lg:text-lg md:text-xl sm:text-lg from-black to-gray-600">
              {post.dateOfPost}
            </div>
            <Link 
            className="w-16 font-kuusino text-white text-center  mx-2 my-2 rounded-lg bg-gradient-to-r  lg:text-lg md:text-xl sm:text-lg from-green-400 to-blue-700"
            to={`/post/${post.id}`}
            element={<ThisPost/>}
            >
                FOCUS!
            </Link>
          </div>

          <div className="break-all px-2 py-2 text-black rounded-lg bg-white lg:text-xl md:text-lg sm:text-sm xs:text-sm">
            {post.documentContent}
          </div>
        </div>
      );
    });

    return <Fragment>{listPosts}</Fragment>;
  }
}

export default Post;
