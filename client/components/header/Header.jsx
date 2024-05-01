import { Navbar, Avatar, Dropdown } from "flowbite-react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa/index.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebase/Authentication";
import { signOut } from "firebase/auth";

function Header({ cart, logedin }) {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const accessToken =
      JSON.parse(window.localStorage.getItem("accesstoken")) || "";

    if (accessToken !== "") {
      axios
        .post("http://127.0.0.1:5000/getuser", {
          uid: accessToken,
        })
        .then((data) => {
          if (data.data.message === "User not found") return;
          // setUserData(data.data.data[0]);
          const usr = data.data.data[0];
          setUserData(usr);
          // console.log(userData)
          // console.log(logedin)
        });
    }
  }, [logedin]);


  return (
    <>
      <div className="container min-w-full px-6 ">
        <Navbar fluid={true} rounded={true} className="bg-amber-600">
          <Navbar.Brand href="/">
            <img
              src="https://cdn.glitch.global/4430ac53-56ef-4250-a0e4-3e2c4c5b1797/clay-crafting.png?v=1714474173474"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
              />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Craft Connect
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <button className="mr-9">
              <Link
                href={"/cartpage"}
                className="flex items-center justify-center gap-x-1"
              >
                <FaShoppingCart />
                <p>{cart}</p>
              </Link>
            </button>

            {userData === "" ? (
              <Link href="/login">Login</Link>
            ) : (
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img={userData.profilepic}
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{userData.username}</span>
                  <span className="block text-sm font-medium truncate">
                    {userData.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>
                  <Link href={`/${userData.role}`}>Dashboard</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button
                    onClick={() => {
                      signOut(auth).then(() => {
                        localStorage.removeItem("accesstoken");
                        location.reload();
                      });
                    }}
                  >
                    Log out
                  </button>{" "}
                </Dropdown.Item>
              </Dropdown>
            )}

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link href={"/"} className="hover:text-white">
              Home
            </Link>
            <Link href={"/category"} className="hover:text-white">
              Category
            </Link>
            <Link href={"/contact"} className="hover:text-white">
              Contact
            </Link>
            <Link href={"/register"} className="hover:text-white">
              Register
            </Link>
            <Link href={"/checkout"} className="hover:text-white">
              Checkout
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
