import Information from './Information'

const Bird = (props) => {
  return (
    <div className="bird">
      <img src={props.bird.picture_path} id="photo" alt="" />
      <h3>{props.bird.name}</h3>
      <p>{props.bird.overview}</p>
      {/* <p className="click">Click for more info.</p> */}
      {/* <section className="info">
        <Information />
      </section> */}
    </div>
  )
}

export default Bird
