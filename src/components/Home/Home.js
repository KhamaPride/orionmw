import React from 'react';
import "./Home.css";
import { Typewriter } from 'react-simple-typewriter';
import hero from "../pic/hero.png";
import "../../assets/css/fontawesome.css";
import "../../assets/css/brands.css";


const Home = () => {
  return (
    <>
        <section className ='hero' id='home'>
            <div className='container f_flex top'>
                <div className='left top'>
                <h3>Orion MW</h3>
                    <h1>
                        We are <span>Orion MW</span>
                    </h1>
                    <h2>
                        <span ><Typewriter
                            words={['Innovation.', 'Collaboration.', 'Imagination.', 'Inspiration.']}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}/>
                        </span>
                    </h2>
                    <p>
                    Powering Growth and Visibility through Innovative Software Engineering and 
                    Strategic Digital Marketing and Branding Solutions to help you achieve your goals
                    </p>
                    <div className='hero_btn d_flex'>
                        <div className='col_1'>
                            <h4>FIND US ON</h4>
                            <div className="button">
                            <button className='btn_shadow'>
                                <i className='fa-brands fa-facebook'></i>
                            </button>
                            <button className='btn_shadow'>
                                <i className='fa-brands fa-instagram'></i>
                            </button>
                            <button className='btn_shadow'>
                                <i className='fa-brands fa-linkedin'></i>
                            </button>
                            </div>
                        </div>
                        <div className='col_1'>
                            <h4>PROFESSIONAL PAGES</h4>
                            <button className='btn_shadow'>
                                <i className='fa-brands fa-github'></i>
                            </button>
                            <button className='btn_shadow'>
                                <i className='fa-brands fa-figma'></i>
                            </button>
                            <button className='btn_shadow'>
                                <i className='fa-brands fa-hackerrank'></i>
                            </button>
                        </div>
                    </div>
                    
                </div>
                    <div className='right'>
                        <div className="right_img">
                            <img src={hero} alt=''/>
                        </div> 
                    </div>
            </div>
        </section>
    </>
  )
}

export default Home;

