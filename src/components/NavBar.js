import { Link } from "react-router-dom";


function NavBar() {

    return (

      
      <nav className="container flex items-center justify-between mx-auto sm:px-6 lg:px-8">
        <Link to="/" className="font-marola text-transparent text-6xl bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-2xl">
                    JARrHuO
                </Link >
        <Link  id="aboutMeBttn" to="/about-me" className=" drop-shadow-2xl px-2 py-2  rounded-lg from-black to-gray-600 drop-shadow-2xl bg-gradient-to-b font-xbr menu-item text-4xl font-medium leading-5 text-white  hover:text-gray-700">
          About Me
        </Link >
        <Link  id="projectsBttn" to="/project" className="drop-shadow-2xl px-2 py-2  rounded-lg from-black to-gray-600 drop-shadow-2xl bg-gradient-to-b font-xbr menu-item text-4xl font-medium leading-5 text-white  hover:text-gray-700">
          PROJECTS 
        </Link >
        <Link  id="diaryBttn" to="/diary" className="drop-shadow-2xl px-2 py-2  rounded-lg from-black to-gray-600 drop-shadow-2xl bg-gradient-to-b font-xbr menu-item text-4xl font-medium leading-5 text-white  hover:text-gray-700">
          UPDATES
        </Link >
      </nav>
      
    );
  };

  
  export default NavBar;