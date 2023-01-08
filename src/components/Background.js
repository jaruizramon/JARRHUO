import ContainerMenu from "./ContainerMenu";
import Columns from "./Columns";


function Background()
{

    return (

        <div className="h-screen bg-gradient-to-b from-black to-gray-800">
            <ContainerMenu></ContainerMenu>
            <Columns></Columns>
        </div>
      
    );
  };

  
  export default Background;