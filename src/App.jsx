import './App.css'
import Bird from './Components/Bird'
import birdsArray from './birds.json'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="container">
      <h1>North American Birds</h1>
      <main className="container">
        {birdsArray.birds.map((bird) => (
          <Bird bird={bird} key={bird.picture_path} />
        ))}
        <footer className="footer">
          <Footer />
        </footer>
      </main>
    </div>
  )
}

export default App
