import React, { useState } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import logo from '../../../static/img/devsite-logo.png'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const NavBar = () => {
  const [active, setActive] = useState(false)

  const toggleNavBar = () => {
    setActive(!active)
  }

  return (
    <StaticQuery
      query={graphql`
            query SearchIndexQuery {
              siteSearchIndex {
                  index
              }
            }
        `}
      render={data => (
        <nav className='navbar is-fixed-top' aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <ProgressiveImageContainer image={logo} alt='The devsite logo' />
            </Link>
            <button
              className={`button navbar-burger ${active ? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={toggleNavBar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${active ? 'is-active' : ''}`} id='navMenu'>
            <div className='navbar-end'>
              {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
              <Link className='navbar-item' to='/about'>
                Sobre nosotros
              </Link>
              {/* <Link className='navbar-item' to='/pricing'>
                Pricing
              </Link> */}
              <Link className='navbar-item' to='/blog'>
                Blog
              </Link>
              <Link className='navbar-item' to='/reviews'>
                Reviews
              </Link>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <p className='control'>
                    <Link
                      className='button is-primary is-outlined'
                      to='/contact'>
                      Contáctanos
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default NavBar
