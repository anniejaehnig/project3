const Information = (props) => {
  return (
    // <div className="info">
    <span id="moreinfo">
      <p>Habitat: {props.bird.habitat}</p>
      <p>Song: {props.bird.song}</p>
      <p>Colors: {props.bird.colors}</p>
      <p>Eggs: {props.bird.eggs}</p>
    </span>
  )
}

export default Information
