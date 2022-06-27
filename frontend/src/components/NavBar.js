import React, { useState } from 'react'
import ButtonPink from './Buttons/ButtonPink';
import ButtonWhite from './Buttons/ButtonWhite';

function NavBar() {
  let Links = [
    {name:"Home", url: "/"},
    {name:"Pricing", url: "/pricing"},
    {name:"Support", url: "/support"},
  ];

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="font-ubuntu bg-purple-500 lg:flex lg:items-center lg:justify-between 
       py-4 lg:px-12 px-7">
        <div className='font-ubuntu font-bold text-2xl lg:mr-6 text-white 
        cursor-pointer flex items-center justify-between'>
          <span>
            FF-Land 
          </span>
          <span 
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
            className="text-4xl cursor-pointer lg:hidden mx-2 -mb-3">
            <ion-icon name={hamburgerOpen ? 'close-outline' : "menu-outline"}></ion-icon>
          </span>
        </div>
        <ul className={`lg:bg-purple-500 bg-purple-700 lg:flex lg:items-center 
          lg:pb-0 pb-8 absolute lg:static z-[-1] lg:z-auto left-0 lg:py-0 pt-4 
          lg:w-auto w-full lg:pl-0 pl-7 
          transition-all ease-in duration-300 ${hamburgerOpen ? "top-18 opacity-100" : 
          "lg:opacity-100 opacity-0 hidden"}`}>
          {
            Links.map((link) => {
              return (
                <li key={link.name} className='lg:ml-14 text-lg 
                  lg:my-0 my-6'>
                  <a href={link.url} className="text-white font-regular 
                    hover:text-pink duration-300">{link.name}</a>
                </li>
              )
            })
          }
          <div className="lg:hidden block">
            <span className="mr-4">
              <ButtonWhite name="Log In"/>
            </span>
            <span>
              <ButtonPink name="Sign Up"/>
            </span>
          </div>
        </ul>
        <div className="lg:ml-auto flex">
          <div className="lg:ml-4 lg:block hidden">
            <ButtonWhite name="Log In"/>
          </div>
          <div className="lg:ml-4 lg:block hidden">
            <ButtonPink name="Sign Up"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar