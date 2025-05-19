function Navbar()  {
  return (
    <>
    <div className='social-links' role= 'navigation'> 
    <a href='#'><img src="src/assets/icons/linkedin.png" alt="" /> </a>
    <a href='#'><img src="src/assets/icons/threads.png" alt="" /> </a>
    <a href='#'><img src="src/assets/icons/facebook.png" alt="" /> </a>
    <a href='#'><img src="src/assets/icons/instagram.png" alt="" /> </a>
    <a href='#'><img src="src/assets/icons/tiktok.png" alt="" /> </a>
    </div>

    <div className='nav-bar'>
      <ul>
        <a href='#'><img className='nav-logo' src="src/assets/icons/nav_logo.png" alt="" /></a>
        <li><a href='#'><b>ABOUT</b></a></li>
        <li><a href='#'><b>SKILLS</b></a></li>
        <li><a href='#'><b>PROJECTS</b></a></li>
        <li><a href='#'><b>CONTACT</b></a></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar