import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"


const links=[
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/about-us",
    title: "About"
  },
  {
    path: "/services",
    title: "Services"
  },
  {
    path: "/login",
    title: "Login"
  },
]

function Navbar() {
  return (
    <>
      {/* add your links */}
      
      <div>
      {links.map((link) => (
        <NavLink
          //   style={({ isActive }) =>
          //   isActive ? activeStyle : defaultStyle
          // }
          className={({ isActive }) =>
            isActive ? style.active : style.default
          }
          to={link.path}
          key={link.path}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
    </>
  )
}

export default Navbar