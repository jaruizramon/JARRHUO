import { Link } from "react-router-dom";

// iconmonstr-github-3.svg'

function NavBar() {

  const buttonStyle = "drop-shadow-2xl lg:mx-8 lg:px-6 lg:my-6 md:my-5 sm:h-6 sm:w-24 mx-auto my-auto text-center max-h-header rounded-lg from-black to-gray-600 drop-shadow-2xl bg-gradient-to-b font-xbr menu-item sm:text-sm  leading-5 text-white  hover:text-gray-700"

  return (
    <nav className="px-8 flex container mx-auto rounded-lg grid-cols-2 max-w-7xl max-h-header">
      <Link
        to="/"
        className="lg:max-h-header font-marola text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-2xl text-6xl" 
      >
        JARrHuO
      </Link>

      <div className="mx-auto grid sm:grid-rows-4 md:grid-cols-4 sm:max-w-lg  ">
        <a
          id="gitHubButtn"
          href="https://github.com/jaruizramon"
          className={buttonStyle}
        >
          GitHUB
        </a>
        <Link
          id="aboutMeBttn"
          to="/about-me"
          className={buttonStyle}
        >
          About Me
        </Link>
        <Link
          id="projectsBttn"
          to="/project"
          className={buttonStyle}
        >
          PROJECTS
        </Link>
        <Link
          id="diaryBttn"
          to="/diary"
          className={buttonStyle}
        >
          UPDATES
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
