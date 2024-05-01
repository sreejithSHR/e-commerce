import Link from "next/link";
function SpecialOffer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-11 mt-14">
        <p className=" font-semibold text-amber-600 text-4xl text-center">Special Offer for New User</p>
        <hr className="w-2/5 h-1 mt-1 bg-gray-300 rounded-xl" />
        <div className="flex flex-row w-full gap-x-5 mt-7">
          <div className="w-1/2 h-96 flex justify-start items-center bg-cover bg-[url('https://cdn.glitch.global/4430ac53-56ef-4250-a0e4-3e2c4c5b1797/pexels-miriam-alonso-7585243.jpg?v=1714537646308')]">
            <div className="flex flex-col items-start text-white font-semibold gap-y-2 w-fit pl-14">
              <p className="text-lg">Crazy deals on first order</p>
              <p className="text-5xl">Flat 30% off</p>
              <p className="text-xl">The best Handmade Clay</p>
              <Link href={"/category"}>
                <button className="px-8 py-2 mt-4 border hover:bg-white hover:text-black">
                  Buy now
                </button>
              </Link>
            </div>
          </div>

          <div className="w-1/2 h-96 flex justify-start items-center bg-cover bg-[url('https://cdn.glitch.global/4430ac53-56ef-4250-a0e4-3e2c4c5b1797/pexels-sadi-gokpinar-321165339-18025831.jpg?v=1714537732743')]">
            <div className="flex flex-col items-start text-white gap-y-2 w-fit pl-14">
              <p className="text-lg">spring/summer</p>
              <p className="text-5xl">Upcomming season</p>
              <p className="text-xl">
                The best t-shirt sales will avaiable soon
              </p>
              <Link href={"/contact"}>
                <button className="px-8 py-2 mt-4 border hover:bg-white hover:text-black">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialOffer;
