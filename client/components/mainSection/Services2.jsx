import { MdLocalShipping } from "react-icons/md/index.js";
import ff from "../../public/img/ff.png";
import ff2 from "../../public/img/ff2.png";
import tt3 from "../../public/img/tt3.png";
import tt4 from "../../public/img/tt4.png";
import t5 from "../../public/img/t5.png";
import Image from "next/image";

function Services() {
  return (
    <>
      <div className="bg-amber-600  pt-14 container min-w-full flex flex-row items-center justify-center gap-24 mt-36">
        <div className=" text-center  text-base text-orange-50">
          <h1 className=" h-14 font-semibold text-4xl text-center text-amber-50 rounded">
            What is Craft Connect
          </h1>
          <p className="text-center text-amber-50 rounded">
          CraftConnect, an innovative digital platform designed to empower rural  artisans, promote traditional craftsmanship, and foster economic  sustainability. CraftConnect leverages AI technologies to bridge the digital  divide, providing accessible registration options and offline support centers  for artisans lacking internet connectivity.
          </p>
        </div>
        
        <div className="  flex flex-col items-center justify-center bg-white px-9 rounded-xl drop-shadow-lg">
          <br />
          <Image
            src={ff}
            width={120}
            height={120}
            alt="f1"
            className="w-auto h-20"
          />
          <br />
          <p className="px-2 text-blue-600 bg-orange-200 rounded">
            Instant delevary
          </p>
          <br />
        </div>
        <div className="flex flex-col items-center justify-center bg-white px-9 rounded-xl drop-shadow-lg">
          <br />
          <Image
            src={ff2}
            width={120}
            height={120}
            alt="f2"
            className="w-auto h-20"
          />
          <br />
          <p className="px-2 text-blue-600 bg-yellow-200 rounded">
            Online order
          </p>
          <br />
        </div>
        <div className="flex flex-col items-center justify-center bg-white px-9 rounded-xl drop-shadow-lg">
          <br />
          <Image
            src={tt3}
            width={120}
            height={120}
            alt="f3"
            className="w-auto h-20"
          />
          <br />
          <p className="px-2 text-blue-600 bg-blue-200 rounded">Quality Product</p>
          <br />
        </div>
        <div className="flex flex-col items-center justify-center bg-white px-9 rounded-xl drop-shadow-lg">
          <br />
          <Image
            src={tt4}
            width={120}
            height={120}
            alt="f4"
            className="w-auto h-20"
          />
          <br />
          <p className="px-2 text-blue-600 rounded bg-violet-200">AI assisted</p>
          <br />
        </div>
        <div className="flex flex-col items-center justify-center bg-white px-9 rounded-xl drop-shadow-lg">
          <br />
          <Image
            src={t5}
            width={120}
            height={120}
            alt="f5"
            className="w-auto h-20"
          />
          <br />
          <p className="px-2 text-blue-600 rounded bg-lime-300">24/7 Support</p>
          <br />
        </div>
        
      </div>
    </>
  );
}

export default Services;
