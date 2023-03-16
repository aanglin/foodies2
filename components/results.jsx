import Thumbnail from "../components/thumbnail";

export default function Results({results}) {
  // console.log(results);
    return (
      
        <div className="flex px-26 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide gap-4 sm:gap-8">
          <Thumbnail results={results} />
        </div>
      
    );
  }
  