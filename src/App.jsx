import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Numbers from "./components/Numbers";
import Methods from "./components/Methods";
import Footer from "./components/Footer";

import './index.css'


const App = () => (
  <div className='bg-[#F8F6F4] w-full'>
    <div className="z-50">   
      <Navbar/>
    </div>

    <div className=" px-8 py-6 flex justify-center items-start">
      <Homepage/>
    </div>

    <div className=" px-8 py-6 flex bg-[#D7DFCC]">
      <About/>
    </div>

    <div className=" px-8 py-6 flex section-margin">
      <Experience/>
    </div>

    <div className="bg-[#D7DFCC] section-margin">
      <Numbers />
    </div>

    <div className="section-margin">
      <Methods />
    </div>

    <div className="bg-[#a5ad9a]">
      <Footer />
    </div>

  </div>
  
);

export default App;