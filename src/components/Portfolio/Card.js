import React, { useState } from 'react'

const Card = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal=()=>{
        setModal(!modal)
    }
  return (
    <>
    <div className='box btn_shadow'>
        <div className='img'>
            <img src={props.image} alt='' onClick={toggleModal}/>

        </div>
        <div className='category d_flex'>
            <span>{props.category}</span>
            <label>
                <i className='far fa-heart'></i>
                {props.totalLike}
            </label>
        </div>
        <div className='title'>
            <h2 onClick={toggleModal}>{props.title}</h2>
            <a href='#popup' className='arrow'>
                <i className='fas fa-arrow-right'></i>
            </a>
        </div>
    </div>
    {/*-------- POOP MODAL */}
    {modal &&(
        <div onClick={toggleModal} className='overlay'>
            <div className='modal-content d_flex'>
                <div className='modal-img left'>
                  <img src ={props.image} alt=''/>  
                </div>
                <div className='modal-text right'>
                    <span> Featured - Design</span>
                    <h1>{props.title}</h1>
                    <p>Lorem ipsum dolor sit amet </p>
                    <p>Lorem ipsum dolor sit amet </p>
                    <div className='button f_flex mtop'>
                        <button className='btn_shadow'>
                            LIKE THIS<i className='far fa-thumbs-up'></i>
                        </button>
                        <button className='btn_shadow'>
                        VIEW PROJECT <i className='fas fa-chevron-right'></i>
                            </button>
                    </div>
                    <button className='close-modal btn_shadow' onClick={toggleModal}>
                        <i className='fas fa-times'></i>
                    </button>
                </div>
            </div>
        </div>
    )}
    </>
  )
}
export default Card;

