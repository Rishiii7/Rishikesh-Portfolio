import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Patent from './components/Patent';

const App = () => {
  return (
      <div className='overflow-x-hidden text-neutral-300 antialiased
        selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] 
            bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          </div>
        </div>
          <div className='mx-auto px-8'>
            <Navbar />
            <Hero />
            <About /> 
            <Patent />
            <Technologies />
            <Experience />
            <Projects />
            <Contacts />
          </div>
    </div>
  );
};

export default App;