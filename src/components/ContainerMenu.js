function ContainerMenu() {

    return (

      
      <div className="border-dotted container flex items-center justify-between mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <button id="aboutMeBttn" className="font-xbr font-bold menu-item text-xl font-medium leading-5 text-gray-900 hover:text-gray-700">
          About Me
        </button>
        <button id="projectsBttn" className="font-xbr font-bold menu-item text-xl font-medium leading-5 text-gray-900 hover:text-gray-700">
          Projects
        </button>
        <button id="diaryBttn" className="font-xbr font-bold menu-item text-xl font-medium leading-5 text-gray-900 hover:text-gray-700">
          Diary
        </button>
      </div>
      
    );
  };

  
  export default ContainerMenu;