import Header from "../components/header/Header";
import Carosel from "../components/mainSection/Carosel";
import Discount from "../components/mainSection/Discount4";
import Feat from "../components/mainSection/feat";
import FeatureProducts from "../components/mainSection/Featured Products 3/FeatureProducts3";
import Footerc from "../components/mainSection/Footer";
import Services from "../components/mainSection/Services2";
import SpecialOffer from "../components/mainSection/special offer 5/Specialoffer5";
import Hert from "../components/mainSection/special offer 5/hert";
import Trustus from "../components/mainSection/UpcommingEvents6";
import Products from "../components/mainSection/Featured Products 3/Products";


function Home() {
  return (
    <>
    <div className="overflow-x-hidden min-w-full   bg-slate-50 ">

      {/* <Header /> */}
      <Hert/>
      <Carosel/>
      <Services/>
      <FeatureProducts/>
      
      <Discount/>
      <SpecialOffer/>
      <Feat/>
      <Trustus/>
      
      <Footerc/>
    </div>
    </>
  );
}

export default Home;
