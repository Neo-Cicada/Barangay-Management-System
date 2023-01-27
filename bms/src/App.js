import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Services from "./pages/Services"
import Enrollment from "./pages/Enrollment"
import Certificate from "./pages/Certificate"
import Facilities from "./pages/Facilities"
import Equipment from "./pages/Equipment"
import Medecine from "./pages/Medicine"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          {/* the route bellow is for sub menu */}
          <Route path="/enrollment" element={<Enrollment/>}/>
          <Route path="/certificate" element={<Certificate/>}/>
          <Route path="/facilities" element={<Facilities/>}/>
          <Route path="/equipment" element={<Equipment/>}/>
          <Route path="/medicine" element={<Medecine/>} />

        </Routes>
      </div>
    </>
  )
}

export default App