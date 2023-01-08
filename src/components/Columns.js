import LastPostPreview from "./LastPostPreview";

function Columns()
{

    return (

        <div className=" h-screen rounded-lg grid grid-cols-2 gap-12 mx-6">
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