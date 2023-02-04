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
    <main className="lg:box-content container w-5/6 mx-auto px-auto">
      <div className="sm:mb-80 rounded-lg bg-black ">
        <div className="">
          <h1 className=" rounded-lg px-8 md:text-2xl lg:text-4xl font-consolas text-white text-center py-4">
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
