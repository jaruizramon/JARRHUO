import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";


function Layout()
{
    //const stateTree

    return (

        <>
            <NavBar/>
            <Outlet/>
        </>
      
    );
  };

  
  export default Layout;