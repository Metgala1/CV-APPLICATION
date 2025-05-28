function Contact ({handlePictureChange, handleChange, input}) {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <hr />
            <label><i class="fa-solid fa-user"></i> Full Name:
                <input onChange={handleChange} type="text" name="name" required value={input.name} placeholder="John" />
            </label>
            <label><i className="fa-solid fa-phone" style={{marginRight: "0.5rem"}}></i>Phone Number:  
                <input onChange={handleChange} value={input.phone} type="tel" name="phone" placeholder="Enter your phone number" required />
            </label>
            <label><i class="fa-solid fa-envelope"></i> Email:
                <input  onChange={handleChange} value={input.email} type="email" name="email" placeholder="Enter your email" required/>
            </label>
            <label><i class="fa-solid fa-location-dot"></i> Address:
                <input  onChange={handleChange} value={input.address} type="text" name="address" placeholder="Enter your address" required/> 
            </label>
            <label><i class="fa-solid fa-globe"></i> Website: 
                <input  onChange={handleChange} value={input.website} type="text" name="website" placeholder="Enter your website" required/>
            </label>
            <label><i class="fa-solid fa-id-badge"></i> Profile Picture:
                <input  onChange={handlePictureChange} value={input.profilePicture} type="file" name="profilePicture" placeholder="Enter your profile picture URL" />
            </label>
            
           </div>
    )
}

export default Contact;