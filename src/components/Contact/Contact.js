import React, {useState} from 'react';
import "../../assets/css/solid.css";
import './Contact.css'; 

const Contact = () => {
    const [data, setData] = useState({
        fullName:"",
        phone:"",
        email:"",
        subject:"",
        message:"",

    });
    const InputEvent = (event)=>{
        const {name,value}=event.target;
        setData((preVal)=>  {
             return{
                ...preVal,
                [name]: value,
             }
        })
    }
const formSubmit = (event)=>{
    event.preventDefault()
    alert(
        `My name is ${data.fullName},
         My phone number is ${data.phone},
         My email address is ${data.emailAddress},
         The subject of my message is ${data.subject},
         My message is : ${data.message}`
)}
  return (
    <div>
      <section className="Contact" id="contact">
        <div className="container top">
            <div className="heading text-center">
                <h4>CONTACT US</h4>
                 <h1>Connect With Us</h1>
                </div>
            </div>

            <div className="content d_flex">
                <div className='left'>
                    <div className='box box_shadow'>
                        <div className='img'>
                            <img src='' alt=''/>
                        </div>
                    <div className="details">
                       <h1>OrionMW</h1> 
                       <p>We are available for freelance work. Connect with us via the following: </p>
                       <p>Phone:+265995496456</p>
                       <p>Email: admin@orionmw.com</p><br/>
                       <span> FIND US ON</span>
                       <div className ='button f_flex'>
                            <button className="btn_shadow">
                            <i className='fa-brands fa-facebook'></i>
                            </button>
                            <button className="btn_shadow">
                            <i className='fa-brands fa-instagram'></i>
                            </button>
                             <button className="btn_shadow">
                            <i className='fa-brands fa-twitter'></i>
                            </button>
                       </div>
                    </div>
                    </div>
                </div>
                <div className="right box_shadow">
                    <form onSubmit={formSubmit}>
                        <div className='f_flex'>
                             <div className="input row">
                                <span>YOUR NAME</span>
                                <input 
                                type='text' 
                                name='fullname' 
                                placeholder='Full Name' 
                                value={data.fullName}
                                onChange={InputEvent}/>
                             </div>
                             <div className="input row">
                                <span>YOUR NUMBER</span>
                                <input 
                                type='phone' 
                                name='phone' 
                                placeholder='Phone Number' 
                                value={data.phone}
                                onChange={InputEvent}/>
                             </div><br/>
                             <div className="input">
                                <span>EMAIL</span>
                                <input 
                                type='email' 
                                name='fulemaillname' 
                                placeholder='Email' 
                                value={data.email}
                                onChange={InputEvent}/>
                             </div>
                             <div className="input">
                                <span>SUBJECT</span>
                                <input 
                                type='subject' 
                                name='subject' 
                                placeholder='Subject' 
                                value={data.subject}
                                onChange={InputEvent}/>
                             </div>
                             <div className="input">
                                <span>YOUR MESSAGE </span>
                                <textarea 
                                type='text'
                                cols="30"
                                rows="10" 
                                name='message' 
                                value={data.message}
                                onChange={InputEvent}></textarea>
                             <button className='btn_shadow'>
                                SEND MESSAGE <i className='fa-solid fa-long-arrow-down'></i>
                             </button>
                             </div>

                        </div>
                        </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
