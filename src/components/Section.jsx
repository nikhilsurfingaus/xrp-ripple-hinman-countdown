import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/chain.json';
import './Section.css';
import Countdown from './Countdown';
import { AiOutlineDownload } from 'react-icons/ai';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsRocketTakeoff } from 'react-icons/bs';
import { db } from '../firebase'; // Import the `db` object from your firebase.js file
import {collection, getDocs, doc, updateDoc} from 'firebase/firestore'

import ConfettiExplosion from 'react-confetti-explosion';


const Section = () => {
  const [rocketClicked, setRocketClicked] = useState(false);
  const [count, setCount] = useState(null);

  

  useEffect(() => {
    // Function to fetch the data from Firestore
    const fetchCounter = async () => {
      try {
        const counterCollectionRef = collection(db, 'counter');
        const querySnapshot = await getDocs(counterCollectionRef);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(data);
            const { count } = data;
            setCount(count);
        });

      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    };

    fetchCounter(); // Call the fetchCounter function when the component mounts
  }, [count]);

  const handleClickRocket = async () => {
    if (!rocketClicked) {
      try {
        const counterDocRef = doc(db, 'counter', 'TyERel4yqOvQi4RqPlal');
        await updateDoc(counterDocRef, { count: count + 1 });
        setRocketClicked(true);
        setCount(count + 1);
      } catch (error) {
        console.error('Error updating count:', error);
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 animate__animated animate__fadeIn">
      <div className="row align-items-stretch">
        <div className="col-lg-6 mb-4 d-flex flex-column justify-content-between float">
          <div className="floating-text-box p-4 rounded bg-black-translucent text-center">
            <div className="mt-3">
              <h2 className="text-white">HINMAN EMAILS COUNTDOWN</h2>
              <Countdown />
            </div>
            <div className="mt-4">
            <ConfettiExplosion width={2000} duration={3000} />
          
              <h5 className="text-white fw-bold">Summary</h5>
              <h6 className="text-white">
                Hinman's emails, the former head of the SEC, are crucial in its lawsuit against Ripple. It is believed that they could contain the evidence that settles the debate on the nature of XRP, Ripple's native asset. However, access to these emails has been blocked by the court until June 13th, 2023.
              </h6>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <div className='d-flex align-items-center me-5 text-white fw-bold' >
                <BsRocketTakeoff className={`rocket ${rocketClicked ? 'rocket-clicked' : ''}`} onClick={() => handleClickRocket()} style={{ fontSize: "1.5rem" }} />
                +{count} XRP Army
              </div>
              <button data-tooltip-id="download" data-tooltip-content="View Exhibit #280 Onwards" className='btn btn-success'>
                <a href="https://www.courtlistener.com/docket/19857399/securities-and-exchange-commission-v-ripple-labs-inc/?filed_after&filed_before&entry_gte&entry_lte&order_by=desc#entry-834"  target="_blank" rel="noreferrer">
                  <AiOutlineDownload className="me-2" />Hinman Emails
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <div>
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
      <ReactTooltip id="download" place='bottom' />
    </div>
  );
};

export default Section;
