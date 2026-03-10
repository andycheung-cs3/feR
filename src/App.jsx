// import { useState } from 'react'
import React, { useState } from 'react'
import logo from "./assets/logo.svg"
import beach from "./assets/beach.png"
import world1 from "./assets/world-1.png"
import world2 from "./assets/world-2.png"
import world3 from "./assets/world-3.png"
import world4 from "./assets/world-4.png"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Tours from "./components/Tours"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0)
  const date = new Date();
      return(
        <>
        
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />
        </>
      );
{/* //   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   ) */}
}

export default App;
