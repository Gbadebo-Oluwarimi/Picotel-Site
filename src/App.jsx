import './App.css'
import Features from './components/Features'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavbar'
function App() {
 

  return (
    <div className="App">
     <TopNavbar/>
     <Navbar/>
     <Landing/>
     <Features/>
    </div>
  )
}

export default App
