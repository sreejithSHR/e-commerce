import { useState } from "react";
import Customer from "../components/register/Customer";
import Seller from "../components/register/Seller";

function Register() {
    const [form, setForm] = useState("Customer")
  return (
    <> 
      <div className="flex flex-col items-center justify-center w-full h-screen text-xl bg-slate-200">
        <div>
          <p className="text-center font-semibold text-4xl">Register</p>
          <div className="grid grid-cols-2 gap-32 mt-6">
            <button className=" px-4 h-14 bg-amber-600 rounded" onClick={()=> setForm("Customer") }>Customer</button>
            <button className=" px-4 h-14 bg-amber-600 rounded" onClick={()=> setForm("Seller") }>Seller</button>
          </div>
        </div>
        <div className="mt-4">
        { form === "Customer" ? <Customer/> : "" }
        { form === "Seller" ? <Seller/> : "" }
        </div>
      </div>
    </>
  );
}

export default Register;
