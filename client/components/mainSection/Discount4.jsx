import { Button } from "flowbite-react";
import Link from "next/link";

function Discount() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 gap-y-4">
        <p className="mt-5 text-xl text-white">Check out Now</p>
        <p className="text-5xl text-white">
          One click Digital Marketplace for <span className="text-red-600">Rural Artisans</span> 
        </p>
        <p className="text-white">
        An Fully featured AI Integrated Marketplace for Exhibiting your Traditional Artifacts and Crafts to the digital World
        </p>
        {/* <button className="mb-5 bg-white ">Explore More</button> */}
        <Link href={"/category"}>
          <Button outline={true} gradientDuoTone="tealToLime" className="mb-5">
            <span className="px-4">Explore More</span>
          </Button>
        </Link>
      </div>
    </>
  );
}
export default Discount;
