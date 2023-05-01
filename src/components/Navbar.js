import { Link, graphql, useStaticQuery} from 'gatsby'
import React from 'react'

export default function Navbar() {
  const data =useStaticQuery(graphql`
    query NavBarQuery{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)

  const{ title }= data.site.siteMetadata

  return (
   <nav>
    <h1>{title}</h1>
      <div className="links">
        <Link to="/technology">Technology</Link>
        <Link to="/operations">Operations</Link>
        <Link to="/digital">Digital Strategy</Link>
      </div>
   </nav>
  )
}
