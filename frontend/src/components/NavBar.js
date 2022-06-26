import React from 'react'

function NavBar() {
  let Links = [
    {name:"Home", url: "/"},
    {name:"Pricing", url: "/pricing"},
    {name:"Support", url: "/support"},
  ];

  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="font-ubuntu md:flex items-center bg-purple-700 py-4 md:px-12 px-7">
        <div className='font-ubuntu font-bold text-2xl md:mr-6 text-white 
        cursor-pointer flex items-center'>
          <span className='text-3xl mr-2 pt-2'>
            <ion-icon name="cash-outline"></ion-icon>
          </span>
          FF-Land 
        </div>
        <ul className="md:flex md:items-center">
          {
            Links.map((link) => {
              return (
                <li key={link.name} className='md:ml-14 text-lg'>
                  <a href={link.url} className="text-white font-light hover:text-pink duration-500">{link.name}</a>
                </li>
              )
            })
          }
        </ul>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar