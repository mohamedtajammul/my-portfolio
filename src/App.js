import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const profile = {
    name: 'K Mohamed Tajammul.',
    designation: 'Full Stack Web Developer.',
    description: "I'm a software engineer specialized in the field of web",
    mail: "tajammul183@gmail.com"
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home details={profile} />
        {/* <Routes>
          <Route path="/" element={<Home details={profile} />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes> */}
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
