import Link from "next/link";
import React from "react";

function menubar() {
  return (
    <div className="flex justify-evenly text-gray-500 text-xl pt-4">
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
    </div>
  );
}

export default menubar;
