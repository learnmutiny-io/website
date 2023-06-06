import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from "../style"
import mu from '../assets/mu.png';
import profile from '../assets/profile.png'
import filter_student from '../assets/filter_student.png'
import recruiters_mu_header from '../assets/recruiters_mu_header.svg'
import recruiters_mu_body from '../assets/recruiters_mu_body.svg'
import mu_status from '../assets/mu_status.png'
import recruiter_mu_body from '../assets/recruiter_mu_body.png'


const Recruiter = () => {
  useEffect(() => {
    const containers = document.querySelectorAll('.scroll-container');

    const handleScroll = () => {

      containers.forEach((container) => {
        const contentContainer = container.querySelector('.content-container');
        const imageContainer = container.querySelector('.image-container');

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const contentBottom = contentContainer.offsetTop + contentContainer.offsetHeight;

        if (scrollTop > contentContainer.offsetTop && scrollTop < contentBottom) {
          const scrollOffset = (scrollTop - contentContainer.offsetTop) / 2;
          imageContainer.style.transform = `translateY(${scrollOffset}px)`;
        } else {
          imageContainer.style.transform = 'none';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full flex-col ${styles.paddingX} sm:mt-20  pt-[180px] `}>
      {/*recruit with learnmutiny container large devices*/}
      <div className={`hidden w-full${styles.flexCenter} ${styles.boxWidth} sm:flex flex-row`}>
        <div className={`flex-1 w-full sm:w-auto flex flex-col ${styles.flexStart} `}>
          <h1 className={`${styles.heading2}`}>recruit with learnmutiny</h1>
          <p className={`${styles.paragraph} mt-10`}>hire talent with the exact <br /> skills you need.</p>
        </div>
        <div className="flex-1 w-full sm:w-auto flex flex-col scroll-container">
          <img src={recruiters_mu_header} alt="mu_iphone" className='sm:w-[500px] w-[250px] self-center content-container image-container' />
        </div>
      </div>

      {/* recruit with learnmutiny container small devices*/}
      <div className={`flex w-full${styles.flexCenter} ${styles.boxWidth} sm:hidden flex-col  `}>
        <h1 className={`${styles.heading2} text-center`}>recruit with learnmutiny</h1>
        <p className={`${styles.paragraph} mt-10 text-center`}>hire talent with the exact skills you need.</p>
        <img src={recruiters_mu_header} alt="mu_iphone" className='w-[350px] self-center mt-10 ' />
      </div>

      {/*gain enhanced insights container*/}
      <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
        {/* large devices*/}
        <div className="hidden flex-1 w-full sm:w-auto sm:flex flex-col ">
          <img src={recruiter_mu_body} alt="mu_iphone_recruit " className='w-[500px]' />
        </div>
        <div className={`hidden flex-1 w-full sm:w-auto sm:flex flex-col ${styles.flexStart} pt-[80px]`}>
          <p className={`${styles.paragraph} font-extrabold mt-5 text-right self-center`}>gain enhanced insights <br /> on the exact skills and <br /> qualifications of <br /> job applicants</p>
        </div>

        {/* small devices*/}
        <div className="sm:hidden flex">
          <p className={`${styles.paragraph} font-extrabold mt-10 mb-10 text-center`}>gain enhanced insights on the exact skills and qualifications of job applicants</p>
        </div>
        <div className="flex flex-1 w-full sm:w-auto sm:hidden flex-col ">
          <img src={recruiter_mu_body} alt="mu_iphone_recruit " className='w-[500px]' />
        </div>
      </div>


      {/*filter applicants by job container large devices*/}
      <div className={`hidden w-full ${styles.flexCenter} ${styles.boxWidth} sm:flex flex-row`}>
        <div className={`flex-1 w-full sm:w-auto flex flex-col ${styles.flexStart} justify-between`}>
          <p className={`${styles.paragraph} mt-10 mb-20 ml-6`}>filter applicants by job <br /> and sort them by score</p>
          <img src={filter_student} alt="mu_iphone" className='w-[600px]' />
        </div>
        <div className="flex-1 w-full sm:w-auto flex flex-col">
          <img src={mu_status} alt="mu_iphone" className='sm:w-[500px] w-[250px] self-center' />
        </div>
      </div>

      {/*filter applicants by job container small devices*/}
      <div className={`sm:hidden w-full ${styles.flexCenter} ${styles.boxWidth} flex flex-col`}>
        <div className={`flex-1 w-full sm:w-auto flex flex-col ${styles.flexStart} justify-between`}>
          <p className={`${styles.paragraph} mt-10 mb-20 ml-6 text-center`}>filter applicants by job and sort them <br/> by score</p>
          <img src={filter_student} alt="mu_iphone" className='w-[600px]' />
        </div>
        <div className="flex-1 w-full sm:w-auto flex flex-col mt-10">
          <img src={mu_status} alt="mu_iphone" className='sm:w-[500px] w-[600px] self-center' />
        </div>
      </div>





      {/* signup container*/}
      {/*large Devices*/}
      <div className={`sm:w-1/2 w-full ${styles.flexCenter} ${styles.boxWidth}  mt-10 text-center sm:text-left`}>
        <h1 className={`${styles.heading3} mt-10`}>sign up now for <br /> early access</h1>
      </div>

      <div className={`w-full mt-5 text-center sm:text-left`}>
        <Link to="/signup"><button style={styles.buttonContainer} className='bg-dimPrimary font-extrabold'><p className={`${styles.paragraph2} font-bold`}>sign up</p></button></Link>
      </div>

    </div>
  )
}

export default Recruiter