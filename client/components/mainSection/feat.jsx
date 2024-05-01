import { Button } from "flowbite-react";
import Link from "next/link";




import tt4 from "../../public/img/tt4.png";

import Image from "next/image";


function Discount() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-14 bg-gradient-to-r from-green-500 to-amber-500 gap-y-4">
      <div className="flex mt-4 flex-col items-center justify-center bg-white   px-48 rounded-xl drop-shadow-lg">
          <br />
          <Image
            src={tt4}
            width={120}
            height={120}
            alt="f4"
            className="w-auto h-20"
          />
          <br />
          <p className="px-2 text-blue-600 rounded bg-violet-200">Happy sell</p>
          <br />
        </div>
        <p className="mt-5 text-xl text-white">Are you a Craftsman looking for a place</p>
        <p className="text-5xl text-white">
        Sell Your Crafts Along the Way
        </p>
        {/* <button className="mb-5 bg-white ">Explore More</button> */}
        <Link href={"/register"}>
          <Button outline={true} gradientDuoTone="tealToLime" className="mb-5">
            <span className="px-4">Register Now </span>
          </Button>
        </Link>
      </div>
    </>
  );
}
export default Discount;
