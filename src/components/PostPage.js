import usePosts from "./usePosts";

function PostPage(props)
{
    const posts = usePosts("getPostsByType", props.postType);

    const headerPageName = (props.postType = "project")  ? 
        headerPageName = "PROJECT UPDATES!" : headerPageName = "DIARY UPDATES!";

    return(

        <div className="flex container mx-auto my-auto rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl">

        </div>

    );
}

export default PostPage;