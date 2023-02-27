import LastPostPreview from "./LastPostPreview";

function Columns()
{

    return (

        <div className="lg:box-content container w-page  px-auto rounded-lg grid grid-cols-2 mx-auto">
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