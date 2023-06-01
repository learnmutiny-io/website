import React from 'react'
import styles from "../style"
import mu from '../assets/mu.png';
import profile from '../assets/profile.png'
import filter_student from '../assets/filter_student.png'
import mu_status from '../assets/mu_status.png'

const Recruiter = () => {
  return (
    <div className={`w-full flex-col ${styles.paddingX}`}>
      {/* meet the new mu container*/}
      <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
        <div>
          <h1 className={`${styles.heading2} `}>recruit with learnmutiny</h1>
          <p className={`${styles.paragraph} font-extrabold mt-10`}>hire talent with the exact skills you need</p>
        </div>
        <div className="w-[800px] max-w-full h-auto sm:mt-0 mt-10">
          <img src={mu} alt="mu_iphone" className="w-[400px]"/>
        </div>
      </div>

      
            {/* gain enhanced insights container*/}
            <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
                <div className="w-[800px] max-w-full h-auto hidden sm:flex">
                    <img src={profile} alt="profile" />
                </div>

                {/* large devices*/}
                <div className="hidden sm:flex flex-col">
                    <p className={`${styles.paragraph} font-extrabold sm:ml-20`}>gain enhanced insights on the exact skills and qualifications of job applicants</p>  
                </div>

                {/*small devices*/}
                <div className="sm:hidden flex">
                    <p className={`${styles.paragraph} font-extrabold mt-20`}>gain enhanced insights on the exact skills and qualifications of job applicants</p>
                </div>
                <div className="w-[800px] max-w-full h-auto sm:hidden flex flex-col mt-20">
                    <img src={profile} alt="profile" />
                </div>
            </div>

             {/* filter applicants container*/}
             <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
                <div className={`w-full flex-col ${styles.flexStart} ${styles.boxWidth}`}>
                <p className={`${styles.paragraph} font-extrabold mb-20 mt-20`}>filter applicants by job and sort them by score</p>
                <img src={filter_student} alt="mu_iphone" className='w-[600px]'/>
                </div>
                <div className="w-[800px] max-w-full h-auto">
                    <img src={mu_status} alt="mu_iphone"  className='w-[400px]'/>
                </div>
            </div>

            {/* signup container*/}
            <div className={`sm:w-1/2 w-full ${styles.flexCenter} ${styles.boxWidth}  mt-10 text-center sm:text-left`}>
                <h1 className={`${styles.heading3} `}>sign up now for early access</h1>
            </div>

            <div className={`w-full mt-5 text-center sm:text-left`}>
                <button style={styles.buttonContainer} className='bg-dimPrimary font-extrabold'><p className={`${styles.paragraph} font-bold`}>sign up</p></button>
            </div>

    </div>
  )
}

export default Recruiter