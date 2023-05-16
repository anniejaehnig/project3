import './App.css'
import Bird from './Components/Bird'
import birdsArray from './birds.json'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">North American Birds</h1>
      <main>
        {birdsArray.birds.map((bird) => (
          <Bird bird={bird} key={bird.picture_path} />
        ))}
      </main>
    </div>
  )
}

export default App
