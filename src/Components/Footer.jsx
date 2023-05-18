const Footer = () => {
  return (
    <div className="footer">
      <br></br>
      <h3>North American Birds</h3>
      <p>Photos from Audubon Society and Google Images.</p>
      <p>
        Other Sources:{' '}
        <a
          className="footerlink"
          href="https://www.allaboutbirds.org/"
          target="blank"
        >
          All About Birds
        </a>
        ,{' '}
        <a
          className="footerlink"
          href="https://birdwatchinghq.com/common-birds-in-rhode-island/"
          target="blank"
        >
          Bird Watching HQ
        </a>
        .
      </p>
    </div>
  )
}

export default Footer
