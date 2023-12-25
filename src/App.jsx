// import styles from "./style";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Numbers from "./components/Numbers";

import './index.css'


const App = () => (
  <div className='px-8 py-6 bg-[#F8F6F4] w-full'>
    <div>   
      <Navbar/>
    </div>

    <div className="flex justify-center items-start">
      <Homepage/>
    </div>

    <div className="flex bg-[#D7DFCC]">
      <About/>
    </div>

    <div className="flex section-margin">
      <Experience/>
    </div>

    <div className="bg-[#D7DFCC] section-margin">
      <Numbers />
    </div>

  </div>
  
);

export default App;