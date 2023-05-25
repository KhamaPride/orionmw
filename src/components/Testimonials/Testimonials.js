import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import TestimonialApi from './TestimonialApi';
import "./Testimonials.css";
import "../../assets/css/solid.css"

const Testimonials = () => {
  const [date, setdata] = useState(TestimonialApi) ;
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    const lastIndex = date.length -1;
    if (index < 0){
      setIndex(lastIndex)
    }
    if(index>lastIndex){
      setIndex(0)
    }
  }, [index, date]);

  useEffect(()=>{
    let slider = setInterval(()=>{
    setIndex(index+1) 
    }, 3000)
    return ()=> clearInterval(slider)
  }, [index]); 

  return (
    <>
      <section className='Testimonial' id='clients'>
        <div className='container'>
            <div className='heading text-center'>
                <h4>WHAT OUR CLIENTS SAY</h4>
                <h1>Testimonials</h1>
            </div>
            <div className='slide'>
                {date.map((value, valueIndex)=>{
                    return <Slide key={value.id} {...value} valueIndex={valueIndex}  index={index}/>
                })}
                

                <div className='slide_button'>
                    <button className='btn_shadow prev_btn' onClick={()=> setIndex(index-1)}>
                        <i className='fas fa-arrow-left'></i>
                    </button>
                    <button className='btn_shadow next_btn'  onClick={()=> setIndex(index+1)}>
                        <i className='fa-solid fa-arrow-right'></i>
                    </button>
                </div>
            </div>
        </div> 
      </section>
    </>
  )
}

export default Testimonials
