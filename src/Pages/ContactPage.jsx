

import Header from "../components/Header/Header";
import "../styles/Pages.css";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
  return (
      <div className="page-wrapper">

    <Header/>
    
   <div className="content">
       <div className="scroll-box">
        <div className="title">
          <h1>Contact Us</h1>
          </div>
        
        <p>
          We'd love to hear from you! Whether you have questions about
          admissions, programs, or campus life, our team is here to help.
        </p>

        <h2>General Enquiries</h2>
        <h3>Vivekanand College Main Campus</h3>
        <p>
          Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071
          <br />
          India
        </p>
        <p>
          Phone: +91 12345 67890
          <br />
          Email: info@vivekanandcollege.edu
          <br />
          Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
        </p>

        <h2>Admissions Office</h2>
        <p>
          For all admission-related queries regarding undergraduate or postgraduate programs:
          <br />
          Phone: +91 98765 43210
          <br />
          Email: admissions@vivekanandcollege.edu
        </p>

        <h2>Student Support Services</h2>
        <p>
          For current student support, academic advising, or general assistance:
          <br />
          Phone: +91 87654 32109
          <br />
          Email: studentsupport@vivekanandcollege.edu
        </p>

        <h2>Find Us on the Map</h2>
        <br></br>
        <a href="https://www.google.com/maps?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
        <br></br>
        <br></br>
        <h2>Send Us a Message</h2>
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
      </div>
    </div>
  <Footer/>
    </div>
      
    
  );
};

export default ContactPage;
