import React from 'react'
// import Parcel from 'single-spa-react/parcel'
import Navigation from '../Navigation'
import { StyledHeader, StyledHelp, StyledSign, BgHeader } from './Heder.style'
import logo from '../../images/voyage-logo.jpg'

const Header = () => {
  return (
    <div>
      <StyledHelp>
        <div className="container">
        help
        </div>
      </StyledHelp>
      <StyledHeader>
        <div className="container">
          <img src={logo} alt="Logotipo Voyage" width="140px" />
          <Navigation />
          <StyledSign>
            <li><a href="">Sign Up</a></li>
            <li><a href="">Login</a></li>
          </StyledSign>
          {/*<Parcel config={() => import('@voyage/compare-app')} />*/}
        </div>
      </StyledHeader>
    </div>
  )
}

export default Header