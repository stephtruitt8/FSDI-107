import "./Navbar.css";


// NEW CODE: Complete Navbar component implementation
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          🛍 <h1>Barto's Arts and Crafts</h1>
        </div>
        <div className="navbar-menu">
          <ul className="fa-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#catalog" className="nav-link">Catalog</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;