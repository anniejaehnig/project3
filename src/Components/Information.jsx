const Information = (props) => {
  return (
    <div>
      <p>Habitat: {props.bird.habitat}</p>
      {/* <p>Song: {props.bird.song}</p> */}
      <p>Colors: {props.bird.colors}</p>
      <p>Eggs: {props.bird.eggs}</p>
    </div>
  )
}

export default Information
