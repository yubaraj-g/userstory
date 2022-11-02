import React from 'react'

function Navbar() {
  return (
    <div className='h-24 flex justify-center items-center bg-indigo-800 text-white gap-4'>
        <div className='logo w-12 h-12 bg-black'>
            {/* <img src="" alt="" /> */}
        </div>
        <div className='title'>
            <h1 className='font-extrabold text-3xl'>UserStory-R-Us</h1>
        </div>
    </div>
  )
}

export default Navbar