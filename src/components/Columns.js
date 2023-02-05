import LastPostPreview from "./LastPostPreview";

function Columns()
{

    return (

        <div className="rounded-lg grid grid-cols-2 ">
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