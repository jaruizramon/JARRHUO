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
        <div className="container mx-auto max-h-screen rounded-lg bg-gradient-to-r from-black to-white drop-shadow-2xl overflow-y-scroll">
            <div className="">
                <h1 className="rounded-lg px-8 py-4 text-6xl font-kuusino text-white text-center">{headerString}</h1>
                <div>
                   <Post key={props.postType} postType={props.postType}/> 
                </div>
            </div>
        </div>
    );

};
export default PostPage;