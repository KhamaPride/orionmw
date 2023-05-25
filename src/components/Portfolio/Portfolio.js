import React from 'react';
import Card from "../Portfolio/Card";
import Portfolio_data from "./Portfolio_data";
import "./Portfolio.css";


const Portfolio = ()=>{
    return (
    <>
        <section className='portfolio top' id ='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>WE'D LOVE TO HEAR FROM YOU. VIEW THE PORTFOLIO AND TELL US WHAT YOU THINK</h4>
                    <h1>My Portfolio</h1>
                </div>

                <div className='content grid'>
                    {Portfolio_data.map((val,index)=>{
                        return (<Card key={index} 
                        image={val.image}
                          category={val.category}
                          totalLike={val.totalLike}
                          title={val.title}
                        />)
                    })}
                    
                </div>
            </div>
        </section>
    </>
    )};

export default Portfolio;