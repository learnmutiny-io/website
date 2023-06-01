import React from 'react';
import { Link } from "react-router-dom";
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/Bs';
import styles from '../style';
import mu_iphone from '../assets/mu_iphone.svg';
import mu_iphone_recruit from '../assets/mu_iphone_recruit.svg';
import concepts from '../assets/concepts.png';
import score from '../assets/score.png';
import scores from '../assets/scores.png'
import leetcode from '../assets/leetcode.svg'

const Mu = () => {
    return (
        <div className={`w-full flex-col ${styles.paddingX}`}>
            {/* meet the new mu container*/}
            <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
                <div>
                    <h1 className={`${styles.heading2} `}>meet the new mu</h1>
                    <p className={`${styles.paragraph} font-extrabold mt-10`}>We have created the world's first dynamic resume.</p>
                </div>
                <div className="w-[800px] max-w-full h-auto">
                    <img src={mu_iphone} alt="mu_iphone" />
                </div>
            </div>

            {/* recruiter reaching out container*/}
            <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
                <div className="w-[800px] max-w-full h-auto hidden sm:flex">
                    <img src={mu_iphone_recruit} alt="mu_iphone_recruit" />
                </div>

                {/* large devices*/}
                <div className="hidden sm:flex flex-col">
                    <p className={`${styles.paragraph} font-extrabold mt-5`}>as you learn we capture your intelligence and display it to industry leading recruiters</p>
                    <p className={`${styles.paragraph} font-extrabold mt-20`}>Stand out from other candidates by connecting your mu with other apps.</p>
                    <div className={`w-full flex-col ${styles.flexEnd} ${styles.boxWidth} sm:flex-row `}>
                        <div style={styles.iconContainer} className={`w-40 h-[40px] ${styles.flexCenter} bg-white`}>
                            <GrLinkedin className='text-linkedIn bg-white' size={60} />
                        </div>
                    </div>
                    <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row md:ml-[160px]`}>
                        <div style={styles.iconContainer} className={`w-40 h-[40px] ${styles.flexCenter} bg-white`}>
                            <BsGithub className='text-github bg-white' size={60} />
                        </div>
                    </div>
                    <div className={`w-full flex-col ${styles.flexEnd} ${styles.boxWidth} sm:flex-row`}>
                        <div style={styles.iconContainer} className={`w-40 h-[40px] ${styles.flexCenter} bg-white`}>
                            <img src={leetcode} className='w-[60px]' />
                        </div>
                    </div>
                </div>



                {/* small devices*/}
                <div className="sm:hidden flex">
                    <p className={`${styles.paragraph} font-extrabold mt-5`}>We capture your intelligence and display it to industry leading recruiters</p>
                </div>
                <div className="w-[800px] max-w-full h-auto sm:hidden flex flex-col">
                    <img src={mu_iphone_recruit} alt="mu_iphone_recruit" />
                    <p className={`${styles.paragraph} font-extrabold mt-5`}>Stand out from other candidates by connecting your mu with other apps.</p>

                    <div className={`w-full flex-row ${styles.flexEnd} ${styles.boxWidth} sm:flex-row `}>
                        <div style={styles.iconContainer} className={`w-40 h-[40px] ${styles.flexCenter} bg-white`}>
                            <GrLinkedin className='text-linkedIn bg-white' size={60} />
                        </div>
                    </div>
                    <div className={`w-full flex-row ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
                        <div style={styles.iconContainer} className={`w-40 h-[40px] ${styles.flexCenter} bg-white`}>
                            <BsGithub className='text-github bg-white' size={60} />
                        </div>
                    </div>
                    <div className={`w-full flex-row ${styles.flexEnd} ${styles.boxWidth} sm:flex-row`}>
                        <div style={styles.iconContainer} className={`w-40 h-[40px] ${styles.flexCenter} bg-white`}>
                            <img src={leetcode} className='w-[60px]' />
                        </div>
                    </div>

                </div>
            </div>

            {/* Build your own mu score contrainer*/}
            <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}>
                <div className='sm:mr-[150px]'>
                    <h1 className={`${styles.heading2} `}>build up your mu score</h1>
                    <p className={`${styles.paragraph} font-extrabold mt-10`}>using artificial intelligence we can capture what you really know</p>
                </div>
                <div className="w-[800px] max-w-full h-auto" >
                    <img src={score} alt="mu_iphone" className='w-[350px]'/>
                    <img src={concepts} className='w-[350px]' />
                </div>
            </div>

            {/* Next steps based on your recent searches needs to build*/}

            {/*
                <div>
                <p> Next steps ...........</p>
                </div>
            */}

            <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth}  mt-10`}>
                <div className='text-center'>
                    <p className={`${styles.paragraph} font-extrabold mt-10`}>Your score is dynamic and reflects your engagement. the more you research the higher your score</p>
                    <div className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth}  mt-10`}>

                        <img src={scores} alt="mu_iphone" className='w-[600px]'/>
                    </div>
                </div>
            </div>


            {/* signup container*/}
            <div className={`sm:w-1/2 w-full ${styles.flexCenter} ${styles.boxWidth}  mt-10 text-center sm:text-left`}>
                <h1 className={`${styles.heading3} `}>sign up now for early access</h1>
            </div>

            <div className={`w-full mt-5 text-center sm:text-left`}>
                <Link to="/signup"><button style={styles.buttonContainer} className='bg-dimPrimary font-extrabold'><p className={`${styles.paragraph} font-bold`}>sign up</p></button></Link>
            </div>
        </div>
    );
}

export default Mu;
