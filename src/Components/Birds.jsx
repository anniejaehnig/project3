const Birds = (props) => {
  return (
    <div className="birds">
      <img src={props.birds.picture_path} id="photo" alt="" />
    </div>
  )
}
