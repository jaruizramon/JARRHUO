import usePosts from "./usePosts";

function PostPage(props)
{

    var headerString = "";

    const posts = usePosts("getPostsByType" , props.postType);
    if (props.postType === "projects"){

        headerString = "PROJECT UPDATE NEWSLETTER";

    } else if (props.postType === "diary"){

        headerString = "DEV's DIARY";

    }

    return(

        <div className="bg-red flex container mx-auto my-auto rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl">
            <h1>{headerString}</h1>
        </div>

    );
}

export default PostPage;