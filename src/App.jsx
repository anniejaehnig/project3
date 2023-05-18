import './App.css'
import Bird from './Components/Bird'
import birdsArray from './birds.json'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div>
      <Header />
      <div className="sidebar1">
        <Sidebar />
      </div>
      <div className="container">
        {birdsArray.birds.map((bird) => (
          <Bird bird={bird} key={bird.picture_path} />
        ))}
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
