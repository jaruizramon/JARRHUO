import usePosts from "./usePosts";

// postTypes = ["diary", "project"]

function LastPostPreview(props) {

  let postType = props.postType;
  const posts = usePosts("getPostByType", postType);

  

  return (
    <div className="bg-gradient-to-r from-white to-gray-400">
      {posts ? <h1 className="font-bold text-center text-xl">{posts[posts.length-1].header}</h1> : null}
      {posts ? <h2 className="italic text-center text-sm">{posts[posts.length-1].dateOfPost}</h2> : null}
      {posts ? <p className="text-l">{posts[posts.length-1].documentContent}</p> : null}
    </div>
  );
}

export default LastPostPreview;