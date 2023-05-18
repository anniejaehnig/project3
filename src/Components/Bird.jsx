import Information from './Information'
import Button from './Button'

const Bird = (props) => {
  return (
    <div className="bird">
      <img src={props.bird.picture_path} id="photo" alt="" />
      <h3>{props.bird.name}</h3>
      <p id="overview">{props.bird.overview}</p>
      {/* Dropdown code from W3Schools */}
      <div className="dropdown">
        <span>
          <Button />
        </span>
        <div className="dropdown-content">
          <p>
            <Information bird={props.bird} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bird
