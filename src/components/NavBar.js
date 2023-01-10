function NavBar() {

    return (

      
      <nav className="border-dotted container flex items-center justify-between mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <button id="aboutMeBttn" to="/about-me" className="px-2 py-2  rounded-lg  from-indigo-500 to-purple-500 drop-shadow-2xl bg-gradient-to-r font-xbr menu-item text-xl font-medium leading-5 text-white  hover:text-gray-700">
          About Me
        </button>
        <button id="projectsBttn" to="/projects" className=" px-2 py-2  rounded-lg  from-indigo-500 to-purple-500 drop-shadow-2xl bg-gradient-to-r font-xbr menu-item text-xl font-medium leading-5 text-white  hover:text-gray-700">
          Projects
        </button>
        <button id="diaryBttn" to="/diary" className="px-2 py-2  rounded-lg  from-indigo-500 to-purple-500 drop-shadow-2xl bg-gradient-to-r font-xbr menu-item text-xl leading-5 text-white  hover:text-gray-700">
          Diary
        </button>
      </nav>
      
    );
  };

  
  export default NavBar;