import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GithubIcon from "react-icons/lib/go/mark-github"

import styles from './Header.module.sass'

import config from '../../../config/SiteConfig'
import index from '../../data/navbar.yaml'

const menuColor = (location, name) => {
  const active = {
    on: {
      color: "#ff9800"
    },
    off: {
      color: '#444'
    }
  }

  if ((location === '/' && name === 'Home') || location.match(`/${name.toLowerCase()}`)) {
    return active.on
  }
}

const ListLink = ({ to, children, location, name }) => (
  <li>
    <Link
      className={styles.menu}
      to={to}
      style={menuColor(location.pathname, name)}
    >
      {children}
    </Link>
  </li>
)

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

const Nav = ({ location }) => (
  <ul className={styles.links}>
    {index.map(i => (
      <ListLink
        key={i.title}
        location={location}
        name={i.title}
        to={i.link}
      >
        {i.title}
      </ListLink>
    ))}
  </ul>
)

Nav.propTypes = {
  location: PropTypes.object.isRequired
}

const Github = () => (
  <a
    className={styles.githubIcon}
    href={config.githubAPI}
    title="GitHub"
  >
    <GithubIcon className={styles.menu}/>
  </a>
)

const Header = ({ location }) => (
  <header className={styles.header}>
    <nav className={styles.wrapper}>
      <Nav location={location}/>
      <Github />
    </nav>
  </header>
)

Header.propTypes = {
  location: PropTypes.object.isRequired
}

export default Header
