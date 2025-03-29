import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import "./App.css"
function App() {
  return (
    <>
    <Navbar/>

    <main>
   <b> Powered By:
   Ankush Ratnani</b>
    </main>
    <div className="cards">
    <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqoeMMTMJcmC9CDSdDTk1oWcnKIq-TfDFfw&s" title="Card1" desc = "React is a JavaScript library for building user interfaces. It is mainly used for creating single-page applications (SPAs) where updates happen dynamically without reloading the page. React is developed and maintained by Meta (formerly Facebook)."/>
    
    <Card image="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" title="Card2" desc = "Learn React Router for navigation. Understand state management with Redux/Zustand.Explore React Hooks like useContext, useRef, etc. Build small projects (like a To-Do List or Weather App)."/>
    
    <Card image="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600" title="Card3" desc = "React is a JavaScript library used to build fast, scalable, and interactive user interfaces (UIs). It was developed by Facebook (now Meta) and is widely used for creating single-page applications (SPAs), where web pages dynamically update without needing a full reload."/>
    
    </div>

    <Footer/>
    </>
  )
}

export default App
