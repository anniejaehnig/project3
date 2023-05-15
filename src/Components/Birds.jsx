const Birds = (props) => {
  return (
    <div className="birds">
      <img src={props.birds.picture_path} id="photo" alt="" />
      <h3>{props.birds.name}</h3>
    </div>
  )
}

export default Birds
