import Post from "./Post";

function PostPage(props) {
  var headerString = "";

  if (props.postType === "project") {
    headerString = "PROJECTS";
  } else if (props.postType === "diary") {
    headerString = "DEV's UPDATES";
  }

  console.log(headerString);

  return (
    <main className="box-content container w-5/6 mx-auto px-auto">
      <div className="my-auto rounded-lg bg-black py-2 ">
        <div className="">
          <h1 className="rounded-lg px-8 text-6xl font-kuusino text-white text-center ">
            {headerString}
          </h1>
          <div className="container box-content max-h-page overscroll-y-contain overflow-y-scroll">
            <Post key={props.postType} postType={props.postType} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default PostPage;
