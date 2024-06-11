import contactImg from "../Images/contact.png"
// import { useState } from "react"

const ContactUs = ()=>{
    return (
        <div className="py-5 px-5">
      <div>
      <img className="rounded-xl" src={contactImg} alt="" />
      </div>
      <div className="px-96">
      <h1 className="font-bold text-3xl">Contact us</h1>
                <form className="space-between">
                <input type="text" placeholder="Name" required/><br/>
                    <input type="email" placeholder="Email" required/><br/>
                    <textarea className="py-1" placeholder="Type your Message here..." required></textarea><br/>
                    <button className="py-1 rounded-sm border-gray-800" type="submit">Submit</button>
                    {/* {message && <span>Thanks for contacting FoodFire, We will reply ASAP.</span>} */}
                </form>
      </div>
    </div>
    )
}

export default ContactUs