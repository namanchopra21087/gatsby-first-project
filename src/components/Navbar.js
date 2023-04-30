import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
   <nav>
    <h1>THG Ingenuity Platform Product Areas</h1>
      <div className="links">
        <Link to="/technology">Technology</Link>
        <Link to="/operations">Operations</Link>
        <Link to="/digital">Digital Strategy</Link>
      </div>
   </nav>
  )
}
