import './App.css'
import Birds from './Components/Birds'
import birdsArray from './birds.json'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <h1 className="title">All About Birds</h1>
      <main>
        {birdsArray.map((birds) => (
          <Birds birds={birds} key={birds.picture_path} />
        ))}
      </main>
    </div>
  )
}

export default App
