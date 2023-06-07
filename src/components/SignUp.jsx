import React, { useEffect, useState } from "react";
import axios from 'axios';
import firebaseApp from "./firebase";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styles from "../style";
import logo from "../assets/logo.png";

const SignUp = () => {
  useEffect(() => {
    //scroll to top of the page on loading
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState(true);

  //get the database
  const db = getFirestore(firebaseApp);

  const selectUserType = (userType) => {
    setSelectedUserType(userType);
  };

  const checkIfEmailExists = async () => {
    const emailQuery = query(
      collection(db, "formDetails"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(emailQuery);
    return !querySnapshot.empty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !selectedUserType) {
      setFormValid(false);
      return;
    }

    const emailExists = await checkIfEmailExists();

    // should write form submission logic
    //adding document to formDetails collection in friebase
    if (emailExists) {
      console.log("emailExists", emailExists);
      console.log("Email already exists:", email);
      // Handle the case when the email already exists (e.g., show an error message)
      navigate("/confirmed", { state: { emailExists } });
      return;
    }

    addDoc(collection(db, "formDetails"), {
      email,
      selectedUserType,
    })
      .then(() => {
        console.log("Form submitted:", email, selectedUserType);
        navigate("/confirmed", { state: { emailExists } });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    // Send a POST request to your server endpoint
    axios.post('http://localhost:80/signup', {
      email,
      selectedUserType,
    })
      .then((response) => {
        console.log('Confirmation email sent');
        // Handle the success response from the server
      })
      .catch((error) => {
        console.error('Error sending confirmation email:', error);
        // Handle the error response from the server
      });
  };

  return (
    <div
      className={`w-full flex-row ${styles.paddingX} h-screen pt-[180px] sm:mb-0 mb-[150px]`}
    >
      <div
        className={`w-full flex-col ${styles.flexStart} ${styles.boxWidth} sm:flex-row`}
      >
        <div className="flex-1 self-end">
          <h1 className={`${styles.heading2} sm:text-left text-center`}>
            sign up
          </h1>
          <p
            className={`${styles.paragraph} hidden sm:flex font-extrabold mt-10`}
          >
            for early beta access to <br /> learnmutiny
          </p>
          <p
            className={`${styles.paragraph} sm:hidden font-extrabold mt-10 sm:text-left text-center`}
          >
            for early beta access to learnmutiny
          </p>
        </div>
        <div className="max-w-full h-auto flex-1 mt-10 sm:mt-0 flex-1">
          <form
            className="flex flex-col p-4 bg-dimPrimary rounded-[35px] p-10 px-10 py-10 w-full"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className={`${styles.paragraph2} block mb-2 font-[850]`}
                htmlFor="signup"
              >
                sign up
              </label>
              <input
                className={`w-full px-4 py-[6px] mt-2 h-[42px] text-white bg-primary rounded-[50px] font-[650] placeholder-primary ${!formValid ? "border border-red-500" : "border-formBorder-300"
                  }`}
                type="email"
                id="signup"
                name="signup"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className={`${styles.paragraph2} block mb-2 font-[850]`}
                htmlFor="signup"
              >
                select
              </label>
              <div className="flex flex-col">
                <button
                  className={`w-full px-4 py-[6px] mt-2 h-[42px] text-darkPrimary bg-primary rounded-[50px] font-[650] mb-5 text-left ${selectedUserType === "MU" ? "border-white border-2" : ""
                    } ${!formValid ? "border border-red-500" : ""}`}
                  type="button"
                  onClick={() => selectUserType("MU")}
                >
                  mu
                </button>
                <button
                  className={`w-full px-4 py-[6px] text-darkPrimary mt-2 h-[42px] bg-primary rounded-[50px] font-[650] text-left ${selectedUserType === "Recruiter"
                      ? "border-white border-2"
                      : ""
                    }`}
                  type="button"
                  onClick={() => selectUserType("Recruiter")}
                >
                  recruiter
                </button>
              </div>
              <input
                type="hidden"
                id="user-type"
                name="userType"
                value={selectedUserType}
              />
            </div>
            <button
              className="px-4 py-2 text-white bg-primary rounded-[50px] mt-2 h-[42px] w-[150px] font-[650] hover:bg-gray-600"
              type="submit"
            >
              sign up
            </button>
            <img
              src={logo}
              className="sm:w-[180px] w-[110px] sm:ml-0 ml-[550px] self-end mt-3 sm:mt-0"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
