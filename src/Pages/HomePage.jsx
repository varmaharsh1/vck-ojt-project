 import Header from "../components/Header/Header";
 import Footer from "../components/Footer/Footer";
 import { Link } from 'react-router-dom';

 


const HomePage = () => {
    return(
      
          <div className="page-wrapper">
     
            <Header/>
       
      <div className="content">
            {/* <h1 className="main_header">Vivekanand College</h1>
            <br></br> */}
            
            <div className="scroll-box">
  

           {/* <img src="D:\ojt\day 4\vck-ojt-project\vck-ojt-app\public\Images\i1.jpg"/> */}
             <div className="banner"><span><img src="/Images/i1.jpg" alt="Vivekanand College Campus" style={{maxWidth: '100%', height: '100%'}}/></span>
            <div className="hero-overlay-text">
                <h1>Welcome to Vivekanand 
                    College!</h1>
                <p>Your journey to excellence starts here.</p>
               
              
             {/* <button  href="/Admission" className="apply-button">Apply Now!</button> */}
             <Link to="/admission" className="apply-button">Apply Now!</Link>
             
             <div className="banner-overlay"></div>
               </div>
            </div> 
             
            {/* <div className="hero-section">
            
             <img className="imgae" src="\Images\i1.jpg" alt="vck"></img>
 </div>
            <div className="hero-overlay-text">
                <h1 align="centre"> Welcome to Vivekanand College</h1><br/>
            <h3>Your journey to excellence starts here.</h3>
            <a href="http://localhost:5173/admission"><button type="button" style={{color:"white", backgroundColor:"green"}}>Apply Now!
                </button></a><br></br>
                </div>
                */}
      <br></br>
            
            <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, 
                and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve 
                their full potential.</p>
                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our 
                    state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem 
                    where curiosity thrives and future leaders are shaped.</p>
                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                        <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                        <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                        <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
                    </ul>
                    <h2>Campus Life & Facilities</h2>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                  
                        
                        <img src="\Images\i2.jpg" height="350" Width="550"/>
                    <img src="\Images\i3.jpg" height="350" Width="550"/>
                   
                    
                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>


                    <br></br>
                <p className="lastline">Ready to explore our courses?</p>
                 <br></br>
                 <br></br>
            <div className="center-btn"> 
                <Link to="/courses" className="apply-btn-2">Explore Courses</Link>
                </div>
                   
               
             

            </div> 
           
            </div>
             
            <Footer/>
         
            </div>
           
                
            
    )
       
}

export default HomePage;




