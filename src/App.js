import { Route,Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Idea from "./components/idea/Idea";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/idea" exact element={<Idea/> } />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
