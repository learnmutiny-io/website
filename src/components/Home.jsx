import React, { useEffect, useState } from 'react';
import main_with_letters from '../assets/main_with_letters.png'
import letters from '../assets/letters.png'
import main from '../assets/main.png'

const Home = () => {
  return (
    <div className="w-[1000px]">
    <img src={main_with_letters} className='hidden sm:flex'/>
    <div className='w-full sm:hidden flex flex-col items-center justify-center'>
    <img src={main} alt="main"  className='w-[250px] pb-10'/>
      <img src={letters} alt="letters" className='w-[300px]'/>
    </div>
    </div>
  )
}

export default Home