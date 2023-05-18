const Sidebar = () => {
  return (
    <div className="sidebar">
      <p id="sidebar">
        <a className="sidebarlink" href="http://www.birds.com">
          Home
        </a>
      </p>
      <p>
        <a className="sidebarlink" href="https://www.bird-sounds.net/">
          Audio
        </a>
      </p>
      <p>
        <a className="sidebarlink" href="https://abcbirds.org/">
          Conservation
        </a>
      </p>
      <p>
        <a
          className="sidebarlink"
          href="https://www.allaboutbirds.org/news/macaulay-librarys-best-bird-photos-2023/#"
        >
          Photos
        </a>
      </p>
    </div>
  )
}

export default Sidebar
