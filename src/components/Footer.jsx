import React from 'react'
import styles from "../style"
import instagram_icon from '../assets/instagram_icon.png'
import linkedin_icon from '../assets/linkedin_icon.png'

const Footer = () => {
    return (

        <div className="w-full flex py-6 justify-between items-center sm:mt-0 mt-20">
            <div className=" flex-col justify-end sm:items-end items-center flex-1 flex">
                <div className="justify-end items-center flex-1 flex">
                    <a href="https://www.linkedin.com/company/learnmutiny/" target='_blank'>
                        <div className="bg-dimPrimary w-12 h-12 flex items-center justify-center rounded-full mr-3">
                            <img src={linkedin_icon}/>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/learnmutiny/" target='_blank'>
                        <div className="bg-dimPrimary w-12 h-12 flex items-center justify-center rounded-full">
                            <img src={instagram_icon}/>
                        </div>
                    </a>

                </div>
                <div className="justify-end items-center flex-1 flex">
                    <p className={`${styles.paragraph2} mr-2 mt-8`}>learnmutiny corporation</p>
                    <p className={`${styles.paragraph3} mt-8`}>2023</p>
                </div>
            </div>


        </div>
    )
}

export default Footer