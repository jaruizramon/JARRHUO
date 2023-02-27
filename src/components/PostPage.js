import Post from "./Post";

function PostPage(props) {
  let headerString = "";

  if (props.postType === "project") {
    headerString = "PROJECTS";
  } else if (props.postType === "diary") {
    headerString = "DEV's UPDATES";
  }

  console.log(headerString);

  return (
    <main className="lg:box-content container w-page mx-auto px-auto ">
      <div className="sm:mb-80 rounded-lg bg-gradient-to-b from-gray-600 to-gray-300 ">
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
