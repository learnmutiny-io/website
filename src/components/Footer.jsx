import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { GrLinkedin, GrInstagram } from 'react-icons/gr';
import styles from "../style"
import footerlogo from '../assets/footerlogo.png'

const Footer = () => {
    return (

        <div className="w-full flex py-6 justify-between items-center sm:mt-0 mt-20">
            <div className=" flex-col justify-end sm:items-end items-center flex-1 flex">
                <div className="justify-end items-center flex-1 flex">
                    <a href="https://www.linkedin.com/company/learnmutiny/" target='_blank'>
                        <div className="bg-dimPrimary w-12 h-12 flex items-center justify-center rounded-full">
                            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/learnmutiny/" target='_blank'>
                        <div className="bg-dimPrimary w-12 h-12 flex items-center justify-center rounded-full">
                            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
                        </div>
                    </a>

                </div>
                <div className="justify-end items-center flex-1 flex">
                    <p className={`${styles.paragraph} font-[800] mr-2 mt-8`}>learnmutiny corporation</p>
                    <p className={`${styles.paragraph} mt-8`}>2023</p>
                </div>
            </div>


        </div>
    )
}

export default Footer