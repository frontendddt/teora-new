'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import img1 from '@/path/to/your/image1.jpg'; 
import single_logos from '@/path/to/your/logo.jpg';
import work_media1 from '@/path/to/your/work_media1.jpg';
import work_media2 from '@/path/to/your/work_media2.jpg';
import allCompany from '@/path/to/your/allCompany.jpg';


const SlidingCards = () => {
  const [step, setStep] = useState(0);

  const cardRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const initCards = () => {
    cardRefs.forEach((ref, index) => {
      if (!ref.current) return;
      ref.current.style.left = '70%';
      ref.current.style.visibility = 'hidden';
      ref.current.style.zIndex = index + 2;
    });
    if (cardRefs[0].current) {
      cardRefs[0].current.style.visibility = 'visible';
    }
  };

  const updateCards = () => {
    cardRefs.forEach((ref, index) => {
      const card = ref.current;
      if (!card) return;

      if (index < step) {
        card.style.left = '0%';
        card.style.visibility = 'visible';
        card.style.zIndex = 100 + index;
      } else if (index === step) {
        card.style.left = '70%';
        card.style.visibility = 'visible';
        card.style.zIndex = 100 + index;
      } else {
        card.style.left = '70%';
        card.style.visibility = 'hidden';
        card.style.zIndex = index + 2;
      }
    });
  };

  useEffect(() => {
    initCards();
  }, []);

  useEffect(() => {
    updateCards();
  }, [step]);

  const next = () => {
    if (step < cardRefs.length - 1) setStep((prev) => prev + 1);
  };

  const prev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <div style={containerWrapperStyle}>
      <div style={containerStyle}>
  
        <div
          ref={cardRefs[0]}
          style={{ ...cardStyle, backgroundColor: '#f5f0e8' }}
        >
          <div className="supported_slider_card corporateBg border_radius_round2 sliderCardHeight mb-3 industry-slide" style={{ padding: '0 0 1.5rem 0' }}>
            <div className="row">
              <div className="col-5 d-flex align-items-center">
                <div className="p_smarter" style={{paddingLeft:'2rem'}}>
                  <h4 className="mb-4">The Liveability Challenge 2023</h4>
                      <p>
                        WINNER- Teora secured $1 million in funding, standing out
                        among over 600 entries for its potential to address global
                        food security issues and to solve a key fish viral disease
                        Scale Drop Disease Virus, which currently has no solutions
                      </p>
                      <p className="mt-4 mb-4">
                        <Link href="https://www.eco-business.com/" className="accentRedColor">
                          https://www.eco-business.com/
                        </Link>
                      </p>
                      <p>
                        <Link href="https://www.eco-business.com/" className="purpleColor fw-medium">
                          Explore more <FaLongArrowAltRight />
                        </Link>
                      </p>
                </div>
              </div>
              <div className="col-7">
                <div className="border_radius_round2 bg-white" style={{ padding: '0 20px 20px 20px' }}>
                  <span className="text-danger" style={{ fontSize: '10px' }}>
                    Press Releases . Cities
                  </span>
                  <h4>
                     Susteon and Teora win S$1 <br /> million prize each at the <br /> Liveability Challenge 2023
                  </h4>
                  <Image src={img1} height={300} style={{ width: '100%' }} alt="Susteon and Teora win" />
                </div>
              </div>
            </div>
            <div className={`container ${styles.sliderBanner}`}>
              <Image src={single_logos} style={{ width: '100%', height: '80px' }} alt="company logos" />
            </div>
          </div>
        </div>

    
        <div
          ref={cardRefs[1]}
          style={{ ...cardStyle, backgroundColor: 'mutedBeigeBg' }}
        >
          <div className="supported_slider_card mutedBeigeBg border_radius_round2 sliderCardHeight d-flex justify-content-center align-items-center" style={{ padding: '0 0 1.5rem 0' }}>
            <div className="container purpleColor border_radius_round2 position-relative">
              <div className="row position-relative">
                <div className="col-md-3">
                  <div style={{ position: 'absolute', left: '0', zIndex: '1', top: '60px', color: '#b7b0bc' }}>
                    <h2>WORK WORTH <br /> BEING IN MEDIA</h2>
                    <div className="mt-5">
                      <a className="buttons-primary" href="/">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-5 d-flex align-items-center">
                  <Image src={work_media1} style={{ width: '100%', height: '85%' }} />
                </div>
                <div className="col-4 d-flex align-items-center">
                  <Image src={work_media2} style={{ width: '100%', height: '85%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

     
        <div
          ref={cardRefs[2]}
          style={{ ...cardStyle, backgroundColor: 'beigeCreamBg' }}
        >
          <div className="supported_slider_card beigeCreamBg border_radius_round2 sliderCardHeight d-flex justify-content-center align-items-center" style={{ padding: '0 0 1.5rem 0' }}>
            <div className="container purpleColor p_smarter corporateBg border_radius_round2 position-relative">
              <div className="row">
                <div className="col-4">
                  <h1>Supported By The Best</h1>
                  <p>
                    For investors who want real impact with global reach—Teora delivers both. Backing
                    Teora is backing the future of food.
                  </p>
                </div>
                <div className="col-8">
                  <Image src={allCompany} alt="company logos" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default SlidingCards;

// ✅ Styles
const containerWrapperStyle = {
  height: '100vh',
  background: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle = {
  position: 'relative',
  width: '1000px',
  height: '500px',
  border: '1px solid #ccc',
  background: 'white',
  overflow: 'hidden',
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
};

const cardStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  padding: '20px',
  transition: 'left 0.5s ease',
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
};
