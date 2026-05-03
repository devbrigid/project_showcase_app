import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <h2>DEVINK AGENCY</h2>
                <div className='nav-links'>
                    <a href="#about">About</a>
                    <a href='#projects'>Projects</a>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;