import { BrowserRouter, Route, Link } from "react-router-dom";

function NavBar() {

    return (

      
      <nav className="border-dotted container flex items-center justify-between mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Link to="/" className="px-12 font-marola text-6xl text-white">
                    JARrHUO
                </Link >
        <Link  id="aboutMeBttn" to="/about-me" className="px-2 py-2  rounded-lg  from-indigo-500 to-purple-500 drop-shadow-2xl bg-gradient-to-r font-xbr menu-item text-4xl font-medium leading-5 text-white  hover:text-gray-700">
          About Me
        </Link >
        <Link  id="projectsBttn" to="/project" className=" px-2 py-2  rounded-lg  from-indigo-500 to-purple-500 drop-shadow-2xl bg-gradient-to-r font-xbr menu-item text-4xl font-medium leading-5 text-white  hover:text-gray-700">
          PROJECTS 
        </Link >
        <Link  id="diaryBttn" to="/diary" className="px-2 py-2  rounded-lg  from-indigo-500 to-purple-500 drop-shadow-2xl bg-gradient-to-r font-xbr menu-item text-4xl leading-5 text-white  hover:text-gray-700">
          Diary
        </Link >
      </nav>
      
    );
  };

  
  export default NavBar;