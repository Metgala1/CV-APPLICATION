import '../styles/contactDis.css';

function ContactDis ({selectedPicture, info}) {
    return (
         <div id="contact">
                    <h2>CONTACT</h2>
                    <hr />
                   <div className="contact-div">
                     <div className="contact-info">
                        <p><i class="fa-solid fa-user"></i> Full Name: <br /><span className="green">{info.name}</span></p>
                        <p><i class="fa-solid fa-phone"></i> Phone Number: <br /><span className="green">{info.phone}</span></p>
                        <p><i class="fa-solid fa-envelope"></i> Email: <br /><span className="green">{info.email}</span></p>
                        <p><i class="fa-solid fa-location-dot"></i> Address: <br /><span className="green">{info.address}</span></p>
                        <p><i class="fa-solid fa-globe"></i> Website: <br /><span className="green">{info.website}</span></p>
                    </div>
                    <div className="image">
                    <div className="img">
                            <img src={selectedPicture} alt={`Photo of ${info.name}`} />
                    </div>
                    </div>
                    </div> 
                </div>
    )
}
export default ContactDis;