import ImageString from "../bitmaptext/ImageString";

const headerTextStyle = { margin: -15, float: 'left', transform: 'scale(0.5)' }
const paragraphTextStyle = { margin: -24, float: 'left', transform: 'scale(0.2)' }

function AboutMe() {
  return (

    <main className="lg:box-content container w-page mx-auto px-auto ">
    <div className="sm:mb-80 rounded-lg bg-gradient-to-b from-gray-600 to-gray-300 ">
      <div className="sm:mb-80 rounded-lg bg-gradient-to-b from-gray-600 to-gray-300">
        <div>
        <ImageString text="Im an unemployed, but talented software engineer!" textStyle={headerTextStyle} />
        </div>
        <div className="container box-content max-h-page overscroll-y-contain overflow-y-scroll">
        <ImageString text="You need to use some sort of fancy OCR scraper to scrape this Good Luck" textStyle={paragraphTextStyle} />
        </div>
      </div>
    </div>
  </main>

  );
}

export default AboutMe;