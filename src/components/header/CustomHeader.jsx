import { Link } from "react-router-dom"
import "./CustomHeader.css"
export default function CustomHeader() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">Arbi</Link>
        </div>
        <ul className="nav-link-list">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/account">Личный кабинет</Link></li>
        </ul>
      </nav>
    </header>
  )
}