import { Link, useMatch, useResolvedPath } from "react-router-dom"
import image from './pages/images/logo-vertical.png'

// Navbar component
export default function Navbar() {
  return (
    <nav className="nav">
      {/* Site title/logo */}
      <Link to="/" className="site-title">
        <img src={image} alt="" height={60} width={150}/>
      </Link>

      {/* Navigation links */}
      <ul>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/Signup">Signup</CustomLink>
      </ul>
    </nav>
  )
}

// CustomLink component to handle active link styling
function CustomLink({ to, children, ...props }) {
  // Get the resolved path and check if it matches the current path
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    // Add active class to li element if link is active
    <li className={isActive ? "active" : ""}>
      {/* Link to the specified path */}
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
