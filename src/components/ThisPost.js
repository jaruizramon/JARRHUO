import NavBar from "./NavBar";
import post from "./Post"

function ThisPost(){

    if (post){
        return(
        
            <div>
                <NavBar/>
            <div
              className={
                "shadow-2xl px-1 py-1 w-5/6 mx-auto my-8 container rounded-lg" 
              }
            >
              <div className="font-consolas  mx-2 my-2 text-white text-center lg:text-3xl md:text-2xl sm:text-xl rounded-lg bg-black">
                {post.header}
              </div>
              <div className="">
                <div className="w-32 font-consolas text-white text-center  mx-2 my-2 rounded-lg bg-gradient-to-r  lg:text-lg md:text-xl sm:text-lg from-black to-gray-600">
                  {post.dateOfPost}
                </div>
              </div>
    
              <div className="break-all px-2 py-2 text-black rounded-lg bg-white lg:text-xl md:text-lg sm:text-sm xs:text-sm">
                {post.documentContent}
              </div>
            </div>
            </div>
        )
    }
    else{
        return(
            <div className="text-white">Not rendered!</div>
        )
    }
    

}

export default ThisPost;