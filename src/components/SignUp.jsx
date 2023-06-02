import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../style";
import logo from '../assets/logo.png';

const SignUp = () => {
  useEffect(() => {
    //scroll to top of the page on loading
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState('');
  const [email, setEmail] = useState('');
  const [formValid, setFormValid] = useState(true);


  const selectUserType = (userType) => {
    setSelectedUserType(userType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !selectedUserType) {
      setFormValid(false);
      return;
    }

    // should write form submission logic
    console.log('Form submitted:', email, selectedUserType);
    navigate('/confirmed');
  };

  return (
    <div className={`w-full flex-row ${styles.paddingX} h-screen`}>
      <div className={`w-full flex-col ${styles.flexStart} ${styles.boxWidth} sm:flex-row`}>
        <div className='flex-1 self-end'>
          <h1 className={`${styles.heading2} `}>signup</h1>
          <p className={`${styles.paragraph} font-extrabold mt-10`}>for early beta access to learn mutiny</p>
        </div>
        <div className="max-w-full h-auto flex-1 mt-10 sm:mt-0">
          <form className=" flex flex-col p-4 bg-dimPrimary rounded-[20px] p-10 sm:w-[500px] w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className={`${styles.paragraph2} block mb-2 font-[850]`} htmlFor="signup">sign up</label>
              <input
                className={`w-full px-4 py-[6px] text-white bg-primary rounded-[50px] font-[650] placeholder-primary ${!formValid ? 'border border-red-500' : 'border-formBorder-300'
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
              <label className={`${styles.paragraph2} block mb-2 font-[850]`} htmlFor="signup">select</label>
              <div className="flex flex-col">
                <button
                  className={`w-full px-4 py-[6px] text-darkPrimary bg-primary rounded-[50px] font-[650] mb-5 text-left ${selectedUserType === 'MU' ? 'border-white border-2' : ''
                    } ${!formValid ? 'border border-red-500' : ''
                    }`}
                  type="button"
                  onClick={() => selectUserType('MU')}
                >
                  mu
                </button>
                <button
                  className={`w-full px-4 py-[6px] text-darkPrimary bg-primary rounded-[50px] font-[650] text-left ${selectedUserType === 'Recruiter' ? 'border-white border-2' : ''
                    }`}
                  type="button"
                  onClick={() => selectUserType('Recruiter')}
                >
                  recruiter
                </button>
              </div>
              <input type="hidden" id="user-type" name="userType" value={selectedUserType} />
            </div>
            <button className="px-4 py-2 text-white bg-primary rounded-[50px] w-[150px] font-[650] hover:bg-gray-600" type="submit">sign up</button>
            <img src={logo} className='w-[120px] self-end mt-3 sm:mt-0'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
