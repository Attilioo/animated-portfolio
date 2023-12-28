import './navbar.scss'

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Attilio Andrea Marotta</span>
        <div className="social">
          <a href="https://github.com/Attilioo">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/attilio-marotta/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
