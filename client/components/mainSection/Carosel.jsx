import { Carousel } from "flowbite-react";
import none from "../../public/img/pot7.jpg";
import niketwo from "../../public/img/pot2.jpg";
import shone from "../../public/img/wood1.jpg";
import girlone from "../../public/img/pot4.jpg";
import head1 from "../../public/img/ce1.jpg";
import head2 from "../../public/img/pot8.jpg";
import Image from "next/image";

function Carosel() {
  return (
    <>
      <div className="  container  items-center grid min-w-full h-96 grid-cols-2 gap-4 pt-16 px-11 sm:h-120  ">
        <Carousel>
          <Image
            src={none}
            height={4000}
            width={4000}
            className="w-fit"
            alt="s1"
          />
          <Image src={shone} height={4000} width={4000} className="" alt="t1" />
          <Image
            src={head1}
            height={4000}
            width={4000}
            className="w-fit"
            alt="h1"
          />
        </Carousel>

        <Carousel indicators={false} className="mt-10">
          <Image src={niketwo} height={4000} width={4000} className="w-fit" alt="s2"/>
          <Image src={girlone} height={1000} width={2000} className="w-fit" alt="t2"/>
          <Image src={head2} height={1000} width={2000} className="w-fit" alt="h2"/>
        </Carousel>
      </div>
    </>
  );
}
export default Carosel;
