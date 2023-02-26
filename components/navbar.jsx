import Image from "next/image";
import Pepper from "../public/images/pepper.jpg";
import Onion from "../public/images/onion.jpg";

function navbar() {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly">
  <div className="flex justify-center md:pb-0 md:pr-4">
    <Image
      width="200"
      src={Pepper}
      alt="Pepper"
    />
  </div>
  <div class="flex justify-center py-8  text-gray-500 md:py-0 text-4xl md:text-7xl">
    <h1 className="pt-16">Foodies Kitchen</h1>
  </div>
  <div className="flex justify-center md:p-0 md:pl-4">
    <Image
      width="200"
      src={Onion}
      alt="Onion"
    />
  </div>
</div>

  );
}

export default navbar;
