function ContainerMenu() {

    return (

      
      <div className="border-dotted container flex items-center justify-between mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <button id="aboutMeBttn" className="font-xbr menu-item text-lg font-medium leading-5 text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out scale-80 hover:scale-150">
          About Me
        </button>
        <button id="projectsBttn" className="font-xbr menu-item text-lg font-medium leading-5 text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out hover:scale-150">
          Projects
        </button>
        <button id="diaryBttn" className="font-xbr menu-item text-lg font-medium leading-5 text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out hover:scale-150">
          Diary
        </button>
      </div>
      
    );
  };

  
  export default ContainerMenu;