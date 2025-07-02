
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/Pages.css";
 

const AboutPage = () => {
  return (
     <div className="page-wrapper">
    <Header />
    
     <div className="content">
    <div className="about-container">
      
 <div className="scroll-box">
  <div className="animate-fade-in-up">
     <h1 >About Vivekanand College</h1>
  </div>
     

      <p className="about-description">
        Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in <strong>1980</strong>.
        Located in the bustling heart of <strong>Chembur, Mumbai</strong>, our college has consistently strived to uphold the highest standards of academic rigor and ethical values.
        <br /><br />
        Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
      </p>

      <h2 className="about-section-title">Our Mission</h2>
      <ul className="about-list">
        <li>To provide high-quality, accessible education across various disciplines.</li>
        <li>To foster research, innovation, and creativity among students and faculty.</li>
        <li>To cultivate a diverse and inclusive learning environment.</li>
        <li>To instill strong ethical values and leadership qualities.</li>
      </ul>

      <h2 className="about-section-title">Our Values</h2>
      <p className="about-description">
        <strong>Integrity, Excellence, Innovation, Community, and Respect</strong> are the pillars upon which Vivekanand College is built.
        We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.
      </p>

      <h2 className="about-section-title">Our History</h2>
      <p className="about-description">
        Our journey began with a vision to make quality education available to all. Since then, we've achieved key milestones, expanded our departments, and nurtured thousands of successful graduates.
      </p>
    </div>
    </div>
    </div>
  <Footer/>
     </div>
  );
};

export default AboutPage;

