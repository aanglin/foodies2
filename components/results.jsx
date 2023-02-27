import Thumbnail from "./Thumbnail";

export default function Results({results}) {
    return (
      <div className="relative pt-11 text-gray-500">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {/* {results.map((result) => (
            <Thumbnail key={result.id} result={result} />  
          ))} */}
        </div>
      </div>
    );
  }
  