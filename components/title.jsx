import requests from "../utils/request";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="relative pt-11 text-gray-500">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?q=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-blue-400 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
    </div>
  );
}
