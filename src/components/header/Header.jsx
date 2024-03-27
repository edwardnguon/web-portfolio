import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <div className="header">
        {/* Siderbar */}
        <div className='wrapper'>
            <span>EN</span>
            <div className='socials'>
                <a href='#'><img src='/linkedin.png' alt='linked in'></img></a>
                <a href='#'><img src='/github.png' alt='git hub'></img></a>
                <a href='#'><img src='/instagram.png' alt='instagram'></img></a>
                <a href='#'><img src='/facebook.png' alt='facebook'></img></a>
            </div>
        </div>
    </div>
  )
}

export default Header