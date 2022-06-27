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
      <div className="font-ubuntu bg-purple-500 md:flex md:items-center md:justify-between 
       py-4 md:px-12 px-7">
        <div className='font-ubuntu font-bold text-2xl md:mr-6 text-white 
        cursor-pointer flex items-center'>
          <span className='text-3xl mr-2 pt-2'>
            <ion-icon name="cash-outline"></ion-icon>
          </span>
          FF-Land 
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static
          z-[-1] md:z-auto md:bg-purple-500 bg-purple-700">
          {
            Links.map((link) => {
              return (
                <li key={link.name} className='md:ml-14 text-lg 
                  md:my-0 my-6'>
                  <a href={link.url} className="text-white font-light 
                    hover:text-pink duration-300">{link.name}</a>
                </li>
              )
            })
          }
        </ul>
        <div className="md:ml-auto">
          <ButtonWhite name="Log In"/>
          <ButtonPink name="Sign Up"/>
        </div>
      </div>
    </div>
  )
}

export default NavBar