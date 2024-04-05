import contactImg from "../Images/contact.png"
// import { useState } from "react"

const ContactUs = ()=>{
    return (
        <div className="contact-container">
      <div className="contact-left">
      <img src={contactImg} alt="" />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form>
                <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Type your Message here..." required></textarea>
                    <button type="submit">Submit</button>
                    {/* {message && <span>Thanks for contacting FoodFire, We will reply ASAP.</span>} */}
                </form>
      </div>
    </div>
    )
}

export default ContactUs