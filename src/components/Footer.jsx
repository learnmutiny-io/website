import React from 'react'
import styles from "../style"
import footerlogo from '../assets/footerlogo.png'

const Footer = () => {
    return (
      
         <div className="w-full flex py-6 justify-between items-center ">
            <div className="justify-end items-center flex-1 hidden sm:flex">
                <p className={`${styles.paragraph} font-[800] mr-2 mt-8`}>learnmutiny corporation</p>
                <p className={`${styles.paragraph} mr-5 mt-8`}>2023</p>
                <img src={footerlogo} className='w-[90px]'/>
            </div>
       
            <div className="justify-end flex-col items-center flex-1 flex sm:hidden ">
                <img src={footerlogo} className='w-[90px] mt-20'/>
                <div className=" flex py-6 items-center ">
                <p className={`${styles.paragraph}  text-[14px] font-[800] mr-2 m-0`}>learnmutiny corporation</p>
                <p className={`${styles.paragraph} text-[14px] mr-5 m-0`}>2023</p>
                </div>
            </div>

        
       </div>
    )
}

export default Footer