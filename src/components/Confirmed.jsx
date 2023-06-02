import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from '../style';
import half_bear from '../assets/half_bear.png'

const Confirmed = () => {
    const location = useLocation();
    const emailExists = location?.state?.emailExists;
    return (
        <div className={`w-full flex-row ${styles.paddingX} h-screen`}>
            <div className={`w-full flex-col ${styles.flexStart} ${styles.boxWidth} sm:flex-row`}>
                <div className='flex-1 self-end'>
                    <h1 className={`${styles.heading2} `}>signup</h1>
                    <p className={`${styles.paragraph} font-extrabold mt-10`}>for early beta access to learn mutiny</p>
                </div>
                <div className="max-w-full h-auto flex-1 mt-10 sm:mt-0">
                    <div className=" flex flex-col bg-dimPrimary rounded-[20px] sm:w-[500px] w-full">
                        {emailExists ? (
                            <>
                                <p className={`${styles.paragraph3} font-extrabold px-8 mt-8`}>seems like you are already signed up for the beta.</p>
                                <p className={`${styles.paragraph2} font-extrabold mt-0 px-8`}>be sure to check your email</p>
                            </>
                        ) : (
                            <>
                                <p className={`${styles.paragraph3} font-extrabold px-8 mt-8`}>great! You are signed up for the beta.</p>
                                <p className={`${styles.paragraph2} font-extrabold mt-0 px-8`}>be sure to check your email.</p>
                            </>
                        )}
                        <img src={half_bear} className='w-[280px] self-end' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmed