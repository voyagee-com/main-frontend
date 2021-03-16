import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { StyledNavigation } from './Navigation.style'
const Navigation = () => {
  return (
    <BrowserRouter>
      <StyledNavigation>
        <ul>
          <li><Link to="/flights">Flights</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
          <li><Link to="/">Packages</Link></li>
          <li><Link to="/">Cars</Link></li>
        </ul>
      </StyledNavigation>
    </BrowserRouter>
  )
}

export default Navigation