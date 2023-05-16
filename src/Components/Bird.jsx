const Bird = (props) => {
  return (
    <div className="bird">
      <img src={props.bird.picture_path} id="photo" alt="" />
      <h3>{props.bird.name}</h3>
      <p>{props.bird.overview}</p>
    </div>
  )
}

export default Bird
