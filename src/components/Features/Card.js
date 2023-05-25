import React from 'react';
import "../../assets/css/fontawesome.css";
import "../../assets/css/solid.css";

const Card = (props) => {
  return ( 
    <>
      <div className='box btn_shadow'>
          <img src={props.image} alt=''/>
          <h2>{props.title}</h2>
          <p>{props.desc}
                </p>
                <a href="">
                    <i className='fa-solid fa-arrow-right'></i>
                </a>
      </div>
  </>)
}
 export default Card
  