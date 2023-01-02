import { samplePageData } from "../data";

function Columns({lastRepositoryPost, lastDiaryPost})
{
    const lastDiaryPost = 'penis';


    return (

        <div class="grid grid-cols-2 gap-4 mx-4" className="columncontainer">
            <div class="border-dashed-2 border-2" className="lastRepo">
                <h1> Stuff Here </h1>
            </div>
            <div  class="border-dashed-2 border-2" className="lastDiary">
                <h1> Stuff Here </h1>
            </div>
        </div>
      
    );
  };

  
  export default Columns;