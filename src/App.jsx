import './App.css'
import Bird from './Components/Bird'
import birdsArray from './birds.json'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Information from './Components/Information'

const App = () => {
  return (
    <div className="container">
      {/* <Header /> */}
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
