const Information = (props) => {
  return (
    <div>
      <p>
        Latin name: <i>{props.bird.latin}</i>
      </p>
      <p>Habitat: {props.bird.habitat}</p>
      {/* <p>Song: {props.bird.song}</p> */}
      <p>Colors: {props.bird.colors}</p>
      <p>Eggs: {props.bird.eggs}</p>
    </div>
  )
}

export default Information
