import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";
import Columns from "./Columns";
import HomeHeader from "./HomeHeader";


function Layout()
{
    //const stateTree

    return (

        <>
            <HomeHeader/>
            <NavBar/>
            <Outlet/>
        </>
      
    );
  };

  
  export default Layout;