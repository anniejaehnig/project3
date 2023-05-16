import Information from './Information'
import Button from './Button'

const Bird = (props) => {
  return (
    <div className="bird">
      <img src={props.bird.picture_path} id="photo" alt="" />
      <h3>{props.bird.name}</h3>
      <p id="overview">{props.bird.overview}</p>
      <Button />
      {/* <p className="click">Click for more info.</p> */}
      {/* <section className="info">
        <Information bird={props.bird} />
      </section> */}
    </div>
  )
}

export default Bird
