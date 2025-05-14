import { Link } from "react-router-dom"
import "./CustomHeader.css"
export default function CustomHeader() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">CryptoArbitrage</Link>
        </div>
        <ul className="nav-link-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    </header>
  )
}