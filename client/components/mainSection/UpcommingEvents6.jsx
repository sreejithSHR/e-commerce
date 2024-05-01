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
      <div className="container min-w-full flex flex-row items-center justify-center gap-24 mt-36">
        <div className="flex flex-col items-center justify-center bg-white px-40 rounded-xl drop-shadow-lg">
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
            Free delevary
          </p>
          <br />
        </div>
        
        
        <div className="flex flex-col items-center justify-center bg-white px-40 rounded-xl drop-shadow-lg">
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
        
      </div>
    </>
  );
}

export default Services;
