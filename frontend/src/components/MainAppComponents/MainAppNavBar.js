import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from "../../firebase-config/firebase-config";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";

function MainAppNavBar() {
  let Links = [
    { name: "Profile", url: "/application/profile" },
    { name: "Inventory", url: "/application/inventory" },
    { name: "Shop", url: "/application/shop" },
    { name: "Social", url: "/application/social" },
    { name: "Settings", url: "/application/settings" },
  ];

const [hamburgerOpen, setHamburgerOpen] = useState(false); 
const navigate = useNavigate();


async function signOutUser() {
  await signOut(auth);
  window.sessionStorage.clear();
  window.localStorage.clear();
  navigate("/");
}

  return (
    <div className="bg-white shadow-md w-full sticky top-0 left-0">
      <div
        className="font-ubuntu bg-purple-500 lg:flex lg:items-center lg:justify-between 
       py-4 lg:px-12 px-7"
      >
        <div
          className="font-ubuntu font-bold text-2xl lg:mr-6 text-white 
        cursor-pointer flex items-center justify-between"
        >
          <Link to="/">
            <div className="hover:scale-110 active:scale-90 
              duration-300">
              FF-Land
            </div>
          </Link>
          <span
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
            className="text-4xl cursor-pointer lg:hidden mx-2 -mb-3 hover:scale-110
            active:scale-90 duration-300">
            <ion-icon
              name={hamburgerOpen ? "close-outline" : "menu-outline"}
            ></ion-icon>
          </span>
        </div>
        <ul
          className={`lg:bg-purple-500 bg-purple-700 lg:flex lg:items-center 
          lg:pb-0 pb-8 absolute lg:static z-[-1] lg:z-auto left-0 lg:py-0 pt-4 
          lg:w-auto w-full lg:pl-0 pl-7 
          transition-all ease-in duration-300 ${
            hamburgerOpen
              ? "top-18 opacity-100"
              : "lg:opacity-100 opacity-0 hidden"
          }`}
        >
          {Links.map((url) => {
            return (
              <li
                key={url.name}
                className="lg:ml-14 text-lg 
                  lg:my-0 my-6"
              >
                <a
                  href={url.url}
                  className="text-white font-regular 
                    hover:text-pink duration-300"
                >
                  {url.name}
                </a>
              </li>
            );
          })}
          <div className="lg:hidden block">
            <span className="mr-4">
              <Link to="/calculator">
                <button className="btn-white">Re-Calculate</button>
              </Link>
            </span>
            <span>
              <button onClick={() => signOutUser()} className="btn-pink">Sign Out</button>
            </span>
          </div>
        </ul>
        <div className="lg:ml-auto flex">
          <div className="lg:ml-4 lg:block hidden">
            <Link to="/calculator">
              <button className="btn-white">Re-Calculate</button>
            </Link>
          </div>
          <div className="lg:ml-4 lg:block hidden">
            <Link to="/">
              <button className="btn-pink">Sign Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAppNavBar