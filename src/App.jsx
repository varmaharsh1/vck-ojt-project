import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import CoursesPage from "./Pages/CoursesPage"
import ContactPage from "./Pages/ContactPage"
import AdmissionPage from "./Pages/AdmissionPage"
// import Footer from "./components/Footer"
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <>  
<div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Harsh Varma"
          studentPhotoUrl="/Images/harsh.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
<Router>
  <Routes>
   
    <Route path="/" element={<HomePage/>}/>
    <Route path="/home" element={<HomePage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/courses" element={<CoursesPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/admission" element={<AdmissionPage/>}/>
  </Routes>
  
</Router>
<ChatbotComponent />
</>
       
    )
}
export default App



