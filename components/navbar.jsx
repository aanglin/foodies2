import Image from "next/image";
import Pepper from "../public/images/pepper.jpg"
import Onion from "../public/images/onion.jpg"

function Navbar() {
  return (
    <div class="flex flex-col md:flex-row md:justify-evenly pt-5">
    <div class="flex justify-center md:pb-0 md:pr-4">
      <Image
        className="h-10 md:h-16 w-32 md:w-48"
        width="310"
        src={Pepper}
        alt="Pepper"
      />
    </div>
    <div class="flex justify-center text-gray-600 py-8 md:py-0 text-4xl md:text-7xl">
      <h1>Foodies Kitchen</h1>
    </div>
    <div class="flex justify-center md:p-0 md:pl-4">
      <Image
        className="h-10 md:h-16 w-32 md:w-48"
        src={Onion}
        alt="Onion"
      />
    </div>
  </div>
  )
}

export default Navbar