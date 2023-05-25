import React from 'react';
import './Features.css';
import Card from './Card';
import data from "./FeaturesApi";
import "../../assets/css/solid.css";

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
            <div className='heading'>
                <h4>Services</h4>
                <h1>What We Do</h1>
            </div>

            <div className='content grid'>
                {data.map((val, index)=> {
                    return <Card key={index}  
                    image={val.image}
                      title={val.title}
                    desc={val.description}
                    />
                })} 
            </div>
        </div>
      </section>
    </>
  )
}

export default Features
