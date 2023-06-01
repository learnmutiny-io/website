import React from 'react'
import styles from "../style"
import footerlogo from '../assets/footerlogo.png'

const Blog = () => {
  return (
    <div className={`${styles.paddingX} ${styles.boxWidth} h-screen mt-20`}>
         <h1 className={`${styles.heading2} `}>Our research</h1>
         <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row bg-dimPrimary mt-10`}  style={styles. blogContainer} >
            <img src={footerlogo} alt="logo" className='w-[200px]'/>
            <p className={`${styles.paragraph} `}>Optimizing capital while implementing recommendation models</p>
            <p className={`${styles.paragraph} self-end pb-3 text-[18px]`}>June 2nd 2023</p>
         </div>
    </div>
  )
}

export default Blog