import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../style";
import half_bear from "../assets/half_bear.png";

const Confirmed = () => {
    useEffect(() => {
        //scroll to top of the page on loading
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation();
    const emailExists = location?.state?.emailExists;
    return (
        <div
            className={`w-full flex-row ${styles.paddingX} h-screen pt-[180px]  sm:mb-0 mb-[180px]`}
        >
            <div
                className={`w-full flex-col ${styles.flexStart} ${styles.boxWidth} sm:flex-row`}
            >
                <div className="flex-1 self-end">
                    <h1 className={`${styles.heading2} sm:text-left text-center`}>sign up</h1>
                    <p className={`${styles.paragraph} hidden sm:flex font-extrabold mt-10`}>
                        for early beta access to <br /> learnmutiny
                    </p>
                    <p className={`${styles.paragraph} sm:hidden flex font-extrabold mt-10 text-center`}>
                        for early beta access to learnmutiny
                    </p>
                </div>
                <div className="max-w-full h-auto flex-1 mt-10 sm:mt-0">
                    <div className=" flex flex-col bg-dimPrimary rounded-[35px]  w-full">
                        {emailExists ? (
                            <>
                                <p className={`${styles.paragraph} hidden sm:flex px-10 mt-8`}>
                                    seems like you are <br /> already signed up for <br /> the beta.
                                </p>
                                <p className={`${styles.paragraph} sm:hidden flex px-10 mt-8`}>
                                    seems like you are already signed up for the beta.
                                </p>
                                <p className={`${styles.paragraph5} mt-0 px-10`}>
                                    be sure to check your email
                                </p>
                            </>
                        ) : (
                            <>
                                <p className={`${styles.paragraph} hidden sm:flex px-10 mt-8`}>
                                    great you are signed <br /> up for the beta.
                                </p>
                                <p className={`${styles.paragraph} sm:hidden flex px-10 mt-8`}>
                                    great you are signed up for the beta.
                                </p>
                                <p className={`${styles.paragraph5} mt-0 px-10`}>
                                    be sure to check your email
                                </p>
                            </>
                        )}
                        <img src={half_bear} className="w-[280px] self-end" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmed;
