import Thumbnail from "../components/thumbnail";

export default function Results({results}) {
  // console.log(results);
    return (
      <div className="relative pt-11 text-gray-500">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          <Thumbnail results={results} />
        </div>
      </div>
    );
  }
  