import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Patent from './components/Patent';

// <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

const App = () => {
  return (
      <div className='overflow-x-hidden text-neutral-300 antialiased
        selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000]  inset-0 
           [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          </div>
        </div>
          <div className='mx-auto px-8'>
            <Navbar />
            <Hero />
            <About /> 
            <Experience />
            <Technologies />
            <Projects />
            <Patent />
            <Contacts />
          </div>
    </div>
  );
};

export default App;