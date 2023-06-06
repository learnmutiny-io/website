import React, { useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

import { Link } from "react-router-dom";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/Bs";
import styles from "../style";
import mu_iphone from "../assets/mu_iphone.svg";
import mu_new from "../assets/mu_new.png";
import mu_iphone_recruit from "../assets/mu_iphone_recruit.svg";
import concepts from "../assets/concepts.png";
import score from "../assets/score.png";
import scores from "../assets/scores.png";
import leetcode from "../assets/leetcode.svg";
import accounts from "../assets/accounts.svg";
import mu_recruiter from "../assets/mu_recruiter.png";
import extension from "../assets/extension.png";
import main_score from "../assets/main_score.png";
import concepts_new from "../assets/concepts_new.png";
import scores_vertical from "../assets/scores_vertical.png";

const Mu = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(".scroll-container");

    const handleScroll = () => {
      containers.forEach((container) => {
        const contentContainer = container.querySelector(".content-container");
        const imageContainer = container.querySelector(".image-container");

        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const contentBottom =
          contentContainer.offsetTop + contentContainer.offsetHeight;

        if (
          scrollTop > contentContainer.offsetTop &&
          scrollTop < contentBottom
        ) {
          const scrollOffset = (scrollTop - contentContainer.offsetTop) / 2;
          imageContainer.style.transform = `translateY(${scrollOffset}px)`;
        } else {
          imageContainer.style.transform = "none";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full flex-col pt-[180px] ${styles.paddingX}`}>
      {/* meet the new mu container large devices*/}
      <div
        className={`hidden w-full${styles.flexCenter} ${styles.boxWidth} sm:flex flex-row scroll-container `}
      >
        <div
          className={`flex-1 w-full sm:w-auto flex flex-col ${styles.flexStart} mb-[280px] content-container image-container`}
        >
          <h1 className={`${styles.heading2}`}>
            meet the <br /> new mu
          </h1>
          <p className={`${styles.paragraph} mt-10`}>
            we have created the world's <br /> first dynamic resume.
          </p>
        </div>
        <div className="flex-1 w-full sm:w-auto flex flex-col ">
          <img
            src={mu_new}
            alt="mu_iphone"
            className="sm:w-[400px] w-[250px] self-center"
          />
        </div>
      </div>

      {/* meet the new mu container small devices*/}
      <div
        className={`flex w-full${styles.flexCenter} ${styles.boxWidth} sm:hidden flex-col  `}
      >
        <h1 className={`${styles.heading2} text-center`}>
          meet the <br /> new mu
        </h1>
        <p className={`${styles.paragraph} mt-10 text-center`}>
          we have created <br /> the world's first <br /> dynamic resume.
        </p>
        <img
          src={mu_new}
          alt="mu_iphone"
          className="sm:w-[400px] w-[250px] self-center mt-10 "
        />
      </div>

      {/* recruiter reaching out container*/}
      <div
        className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth} sm:flex-row`}
      >
        <div className="hidden flex-1 w-full sm:w-auto sm:flex flex-col ">
          <img
            src={mu_recruiter}
            alt="mu_iphone_recruit "
            className="w-[400px]"
          />
        </div>

        {/* large devices*/}
        <div
          className={`hidden flex-1 w-full sm:w-auto sm:flex flex-col ${styles.flexStart} pt-[80px]`}
        >
          <p
            className={`${styles.paragraph} font-extrabold mt-5 text-center self-center`}
          >
            as you learn we capture your <br /> intelligence and display it to{" "}
            <br /> industry leading recruiters
          </p>
          <p
            className={`${styles.paragraph} font-extrabold mt-20 text-center self-center`}
          >
            stand out from other <br /> applicants by connecting <br /> your mu
            with other apps.
          </p>
          <div
            className={`w-full flex-col ${styles.flexEnd} ${styles.boxWidth} sm:flex-row `}
          >
            <img src={accounts} />
          </div>
        </div>

        {/* small devices*/}
        <div className="sm:hidden flex">
          <p
            className={`${styles.paragraph} font-extrabold mt-10 mb-10 text-center`}
          >
            we capture your intelligence and display it to industry leading
            recruiters.
          </p>
        </div>
        <div className="w-[800px] max-w-full h-auto sm:hidden flex flex-col justify-center items-center">
          <img
            src={mu_recruiter}
            alt="mu_iphone_recruit "
            className="w-[250px]"
          />
          <p className={`${styles.paragraph} font-extrabold mt-10 text-center`}>
            stand out from <br /> other candidates by showing your real skills
            to recruiters.
          </p>

          <div
            className={`w-full  ${styles.flexCenter} ${styles.boxWidth} flex-row `}
          >
            <img src={accounts} />
          </div>
        </div>
      </div>

      {/* Build your own mu score contrainer*/}
      {/*large devices*/}
      <div
        className={`hidden w-full ${styles.flexCenter} ${styles.boxWidth} sm:flex flex-row scroll-container `}
      >
        <div className="flex-1 sm:mr-[150px] ">
          <h1 className={`${styles.heading2}`}>
            build up your <br /> mu score
          </h1>
          <p className={`${styles.paragraph} font-extrabold mt-20`}>
            using artificial intelligence <br /> we can capture what you <br />{" "}
            really know
          </p>
          <p className={`${styles.paragraph} font-extrabold mt-20 mb-10`}>
            when you learn we can gauge <br /> your skill expertise in your{" "}
            <br /> current career interest through <br /> our browser extension.
          </p>
          <img src={extension} className=" w-[450px]" />
        </div>
        {/*assests container*/}
        <div className="flex-1 w-[800px] max-w-full h-auto ${styles.flexCenter} content-container image-container mb-[300px]">
          <img
            src={main_score}
            alt="mu_iphone"
            className="w-[450px] mb-[30px]"
          />
          <img src={concepts_new} className="self-center w-[450px]" />
        </div>
      </div>

      {/* Build your own mu score contrainer*/}
      {/*small devices*/}
      <div
        className={`sm:hidden w-full flex-col ${styles.flexCenter} ${styles.boxWidth} flex flex-row`}
      >
        <div className="flex-1 sm:mr-[150px] ">
          <h1 className={`${styles.heading2} text-center`}>
            build up your <br /> mu score
          </h1>
          <p
            className={`${styles.paragraph} font-extrabold mt-10 mb-10 text-center`}
          >
            using artificial intelligence we can capture what you really know
          </p>
          <div className="max-w-full h-auto flex flex-col items-center justify-center ">
            <img
              src={main_score}
              alt="mu_iphone"
              className="w-[300px] self-center mb-[30px]"
            />
            <img src={concepts_new} className="self-cenetr w-[450px]" />
          </div>
          <p className={`${styles.paragraph} mt-10 mb-10 text-center`}>
            as you learn we can guage your skill expertise in your current
            career interest.
          </p>
          <img src={extension} className=" w-[450px]" />
        </div>
      </div>

      {/*dynamic score contrainer*/}
      {/*large devices*/}
      <div
        className={`hidden sm:flex w-full flex-col ${styles.flexCenter} ${styles.boxWidth}  mt-10`}
      >
        <div className="text-center">
          <p className={`${styles.paragraph} font-extrabold mt-10 `}>
            your score is dynamic and reflects <br /> your engagement. the more
            you <br /> research the higher your score
          </p>
          <div
            className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth}  mt-10`}
          >
            <img src={scores} alt="mu_iphone" className="w-[700px]" />
          </div>
        </div>
      </div>

      {/*dynamic score contrainer*/}
      {/*small devices*/}
      <div
        className={`sm:hidden flex w-full flex-col ${styles.flexCenter} ${styles.boxWidth}  mt-10`}
      >
        <div className="text-center">
          <p className={`${styles.paragraph} font-extrabold mt-10 `}>
            your score is dynamic and reflects your engagement. the more you
            research the higher your score.
          </p>
          <div
            className={`w-full flex-col ${styles.flexCenter} ${styles.boxWidth}  mt-10`}
          >
            <img
              src={scores_vertical}
              alt="mu_iphone"
              className="w-[200px] mt-10"
            />
          </div>
        </div>
      </div>

      {/* signup container*/}
      {/*large Devices*/}
      <div
        className={`sm:w-1/2 w-full ${styles.flexCenter} ${styles.boxWidth}  mt-10 text-center sm:text-left`}
      >
        <h1 className={`${styles.heading3} mt-10`}>
          sign up now for <br /> early access
        </h1>
      </div>

      <div className={`w-full mt-5 text-center sm:text-left`}>
        <Link to="/signup">
          <button
            style={styles.buttonContainer}
            className="bg-dimPrimary font-extrabold"
          >
            <p className={`${styles.paragraph2} font-bold`}>sign up</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mu;
