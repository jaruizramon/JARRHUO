import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";


function Layout()
{
    //const stateTree

    return (

        <>
            <NavBar/>
            <Outlet className="min-h-full"></Outlet>
        </>
      
    );
  };

  
  export default Layout;