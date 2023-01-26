import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Barangay Management System
      </Link>
      <ul>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  const [showSubmenu, setShowSubmenu] = React.useState(false)

  return (
    <li className={isActive ? "active" : ""} onMouseEnter={() => setShowSubmenu(true)} onMouseLeave={() => setShowSubmenu(false)}>
      <Link to={to} {...props}>
        {children}
      </Link>
      {to === '/services' && (
        <ul style={{display: showSubmenu ? 'block' : 'none'}}>
          <CustomLink to="/services/Enrollment">Enrollment</CustomLink>
          <CustomLink to="/services/Medecine">Medecine</CustomLink>
          <CustomLink to="/services/Equipments">Equipments</CustomLink>
          <CustomLink to="/services/Facilities">Facilities</CustomLink>


        </ul>
      )}
    </li>
  )
}
