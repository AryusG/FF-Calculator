import React from 'react'
import ButtonPink from './Buttons/ButtonPink';
import ButtonWhite from './Buttons/ButtonWhite';

function NavBar() {
  let Links = [
    {name:"Home", url: "/"},
    {name:"Pricing", url: "/pricing"},
    {name:"Support", url: "/support"},
  ];

  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="font-ubuntu bg-purple-500 lg:flex lg:items-center lg:justify-between 
       py-4 lg:px-12 px-7">
        <div className='font-ubuntu font-bold text-2xl lg:mr-6 text-white 
        cursor-pointer flex items-center'>
          <span className='text-3xl mr-2 pt-2'>
            <ion-icon name="cash-outline"></ion-icon>
          </span>
          FF-Land 
        </div>
        <ul className="lg:bg-purple-500 bg-purple-700 lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static
          z-[-1] lg:z-auto left-0 lg:py-0 py-4 
          lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all 
          ease-in duration-300">
          {
            Links.map((link) => {
              return (
                <li key={link.name} className='lg:ml-14 text-lg 
                  lg:my-0 my-6'>
                  <a href={link.url} className="text-white font-light 
                    hover:text-pink duration-300">{link.name}</a>
                </li>
              )
            })
          }
        </ul>
        <div className="lg:ml-auto flex">
          <div className="lg:ml-4">
            <ButtonWhite name="Log In"/>
          </div>
          <div className="lg:ml-4">
            <ButtonPink name="Sign Up"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar