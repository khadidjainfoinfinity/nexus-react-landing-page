import { Box } from '@mui/material';
import './contact.css';

const Contact = () => {
  return (
    <Box>
        <h1>contact</h1>
    <div className="container2">
      <main className="row1">
        <section className="col left">
          <div className="contactTitle">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
          </div>
          <div className="contactInfo">
            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="details">
                <span>Phone</span>
                <span>+00 110 111 00</span>
              </div>
            </div>
            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="details">
                <span>Email</span>
                <span>nexus@gmail.com</span>
              </div>
            </div>
            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="details">
                <span>Location</span>
                <span>X Street, Y Road, San Fransisco</span>
              </div>
            </div>
          </div>
        </section>
        <section className="col right">
          {/* ******* Form Starts ******* */}
          <form className="messageForm">
            <div className="inputGroup halfWidth">
              <input type="text" name="" required="required" />
              <label>Your Name</label>
            </div>
            <div className="inputGroup halfWidth">
              <input type="email" name="" required="required" />
              <label>Email</label>
            </div>
            <div className="inputGroup fullWidth">
              <input type="text" name="" required="required" />
              <label>Subject</label>
            </div>
            <div className="inputGroup fullWidth">
              <textarea required="required"></textarea>
              <label>Say Something</label>
            </div>
            <div className="inputGroup fullWidth">
              <button>Send Message</button>
            </div>
          </form>
        </section>
      </main>
    </div>
    </Box>
  );
};

export default Contact;
