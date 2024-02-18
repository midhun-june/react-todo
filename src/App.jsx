import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Blog from './Blog.jsx'
import { Route, Routes } from "react-router-dom"
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

function App() {
  return (
    <div>
      <Header/>
      <div className='container' style={{minHeight:'90vh'}}>
        <Routes>  
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
