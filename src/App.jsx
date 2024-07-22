import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import Cause from "./pages/Cause"
import Event from "./pages/Event"
import Donate from "./pages/Donate"
import Volunteer from "./pages/Volunteer"


function App() {
 

  return (
   <div>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/causes" element={<Cause/>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/volunteer" element={<Volunteer/>}/>
      <Route path="/contact" element={<Contact/>} />
      

      </Route>
     </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
