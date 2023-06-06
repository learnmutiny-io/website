import React from 'react'
import styles from "../style"
import footerlogo from '../assets/footerlogo.png'

const Blog = () => {
  return (
    <div className={`w-full flex-col ${styles.paddingX} sm:mt-20 mb-20 pt-[180px] h-screen`}>
      <h1 className={`${styles.heading2} sm:text-left text-center`}>Our research</h1>
      {/*large devices*/}
      <div className={`hidden w-full ${styles.flexCenter} ${styles.boxWidth} sm:flex flex-row bg-dimPrimary mt-10 justify-between p-3`} style={styles.blogContainerLarge}>
        <div className='flex flex-row justify-start items-center'>
          <img src={footerlogo} alt="logo" className='w-[150px]' />
          <p className={`${styles.paragraph}`}>Coming soon</p>
        </div>
        <p className={`${styles.paragraph2} self-end`}>June 2nd 2023</p>
      </div>
      {/*small devices*/}
      <div className={`sm:hidden w-full ${styles.boxWidth} flex flex-row bg-dimPrimary mt-10 justify-between px-2 py-2`} style={styles.blogContainerSmall}>
  
          <img src={footerlogo} alt="logo" className='w-[60px] self-end ' />
          <p className={`${styles.paragraph2} self-start text-center flex-1`}>Coming soon</p>
        <p className={`${styles.paragraph4} self-end `}>June 2nd 2023</p>
      </div>

    </div>
  )
}

export default Blog