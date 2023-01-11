import Post from "./Post";

function PostPage(props){

    var headerString = "";

    

    if (props.postType === "project"){

        headerString = "PROJECTS";

    } else if (props.postType === "diary"){

        headerString = "DEV's DIARY";

    }

    console.log(headerString);

    return(
        <div className="flex container mx-auto my-auto rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-2xl">
            <div className="">
                <h1 className="px-8 py-4 text-6xl font-kuusino text-white text-center">{headerString}</h1>
                <div>
                   <Post key={props.postType} postType={props.postType}/> 
                </div>
            </div>
        </div>
    );

};
export default PostPage;