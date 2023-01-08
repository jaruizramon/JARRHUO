import LastPostPreview from "./LastPostPreview";

function Columns()
{

    return (

        <div className="grid grid-cols-2 gap-4 mx-4">
            <div className="">
                <LastPostPreview
                    postType="diary"
                />
            </div>
            <div className="">
                <LastPostPreview
                    postType="project"
                />
            </div>
        </div>
      
    );
  };

  
  export default Columns;