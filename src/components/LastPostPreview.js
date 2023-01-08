import usePosts from "./usePosts";

// postTypes = ["diary", "project"]

function LastPostPreview(props) {

  let postType = props.postType;
  const posts = usePosts("getPostByType", postType);

  

  return (
    <div className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl bg-gradient-to-r">
      {posts ? <h1 className="font-xbr text-white font-bold text-center text-2xl">{posts[posts.length-1].header}</h1> : null}
      {posts ? <h2 className="text-white italic text-center text-sm">{posts[posts.length-1].dateOfPost}</h2> : null}
      {posts ? <p className="px-2 py-2">{posts[posts.length-1].documentContent}</p> : null}
    </div>
  );
}

export default LastPostPreview;