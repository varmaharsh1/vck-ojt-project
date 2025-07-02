

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Pages.css"; 
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
     <div className="page-wrapper">
      <Header />
     <div className="content">
    <div className="courses-container">
      
 <div className="scroll-box">
  <div className="title">
    <h1 >Our Academic Programs</h1>
    </div>
      
      <p className="courses-description">
        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs 
        designed to equip students with the knowledge and skills demanded by today's dynamic 
        global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
      </p>

      <h2 className="courses-title">Discover Campus Life</h2>
      <div className="video-container">
        <video controls width="600">
          <source src="/Videos/college-tour-FAmcnyfF.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 className="courses-subtitle">Undergraduate Programs (UG)</h2>
      <ul className="courses-list">
        <li><strong>Bachelor of Science (B.Sc.)</strong>
          <ul>
            <li>Computer Science (3 years)</li>
            <li>Information Technology (3 years)</li>
            <li>Biotechnology (3 years)</li>
          </ul>
        </li>
        <li><strong>Bachelor of Commerce (B.Com)</strong>
          <ul>
            <li>Accounting & Finance (3 years)</li>
            <li>Banking & Insurance (3 years)</li>
          </ul>
        </li>
        <li><strong>Bachelor of Arts (B.A.)</strong>
          <ul>
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
          </ul>
        </li>
      </ul>

      <h2 className="courses-subtitle">Postgraduate Programs (PG)</h2>
      <ul className="courses-list">
        <li><strong>Master of Science (M.Sc.)</strong>
          <ul>
            <li>Computer Science (2 years)</li>
            <li>Information Technology (2 years)</li>
          </ul>
        </li>
        <li><strong>Master of Commerce (M.Com)</strong> (2 years)</li>
        <li><strong>Master of Arts (M.A.)</strong> (2 years)</li>
      </ul>

      <h2 className="courses-subtitle">Program Details & Fee Structure (Annual)</h2>
      <div className="table-container">
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Program Type</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Annual Fee (INR)</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UG</td>
              <td>B.Sc. Computer Science</td>
              <td>3 Years</td>
              <td>₹ 85,000</td>
              <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com. Accounting & Finance</td>
              <td>3 Years</td>
              <td>₹ 70,000</td>
              <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. Information Technology</td>
              <td>2 Years</td>
              <td>₹ 95,000</td>
              <td>B.Sc. IT/CS (50%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="courses-subtitle">Specialized & Vocational Courses</h2>
      <p className="courses-description">
        We offer various certificate and diploma courses in areas like Digital Marketing, Web Development,
        Data Analytics, and Soft Skills Development for career enhancement.
      </p>

      <h3 className="center-btn">Have questions about a specific course?</h3>
      <div className="center-btn">
   <Link to="/contact" className="apply-btn-2">Inquire About Courses</Link>
      </div>
  
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CoursesPage;

