import React, { useEffect } from 'react';
import styles from "../style"

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div className={`w-full flex-col ${styles.paddingX} h-screen mt-20`}>
    {/* meet the new mu container*/}
    <div className={`w-full flex-col ${styles.flexStart} ${styles.boxWidth} sm:flex-row`}>
        <div>
            <h1 className={`${styles.heading2} `}>sign up</h1>
            <p className={`${styles.paragraph} font-extrabold mt-10`}>for early beta access to learnmutiny</p>
        </div>
    </div>
    </div>
  )
}

export default SignUp