import React, { useRef } from 'react'
import '../style/header.css'
import logo from '../assets/img/logo1.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'




const Header = () => {
  const headerRef = useRef(null)

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky_header')
    } else {
      headerRef.current.classList.remove('sticky_header')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 80,
    })
  }

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav_wrapper'>
          {/* ==== LOGO ==== */}

          <Link className="btn mx-2" to="/">

          <div className='logo'>
              <img src={logo} width="30%" alt='' />
          
          </div>
          </Link>

          {/* ======= nav right ======= */}

          <div className='nav_right'>
            <Link className='btn btncolor' to='/Login'>Login</Link>
            <span className='mobile_menu'>
              <i className='ri-menu-line'></i>
            </span>
          </div>
          <div className='nav_right'>
            <Link className='btn btncolor' to='/Register'>Register</Link>
            <span className='mobile_menu'>
              <i className='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header