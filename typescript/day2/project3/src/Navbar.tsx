import React, { useState } from "react";
import logo from "./assets/logo.png";
import { BsPersonCircle } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(true);
  const handleClicked = () => {
    if (menu) {
      setMenu(false);
      console.log(menu);
    } else {
      setMenu(true);
      console.log(menu);
    }
  };
  return (
    <>
      {/* large devices */}
      <div className="md:block hidden">
        <div className="flex flex-row justify-between px-12 items-center h-12">
          <div className="flex flex-row justify-around items-center">
            <div>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "80px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="p-2 flex flex-row gap-2">
              {" "}
              <div className="font-thin text-sm hover:border-b-2 border-gray-500">
                Microsoft 365
              </div>
              <div className="font-thin text-sm hover:border-b-2 border-gray-500">
                Teams
              </div>
              <div className="font-thin text-sm hover:border-b-2 border-gray-500">
                Windows
              </div>
              <div className="font-thin text-sm hover:border-b-2 border-gray-500">
                Surface
              </div>
              <div className="font-thin text-sm hover:border-b-2 border-gray-500">
                Xbox
              </div>
              <div className="font-thin text-sm hover:border-b-2 border-gray-500">
                Support
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="font-thin text-sm hover:border-b-2 border-gray-500">
              All Microsoft
            </div>{" "}
            <div className="font-thin text-sm hover:border-b-2 border-gray-500">
              Search
            </div>{" "}
            <div className="font-thin text-sm hover:border-b-2 border-gray-500">
              Sign In
            </div>
          </div>
        </div>
      </div>

      {/* small devices */}
      <div className="md:hidden block">
        <div className="flex flex-row justify-between  items-center h-12">
          <div>
            {" "}
            <div className="" onClick={handleClicked}>
              {menu ? (
                <GrClose />
              ) : (
                <>
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </>
              )}
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "80px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="">
            <BsPersonCircle style={{ marginRight: "6px" }} />
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        {" "}
        <div
          className={`${
            menu ? "block" : "hidden"
          } absolute z-10 bg-[#f2f2f2] text-black w-full p-2`}
        >
          <ul>
            <li> Microsoft 365</li>
            <li> Teams</li>
            <li> Windows</li>
            <li> Surface</li>
            <li> Xbox</li>
            <li> Support</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
