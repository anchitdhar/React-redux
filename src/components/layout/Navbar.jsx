import React from 'react'
import {Link } from 'react-router-dom'
import styled from 'styled-components'
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const StyledWrapper = styled.div`
.home-section{
  font-size:18px;
  font-weight:800;
}
`

const Navbar = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="row">
          <div className="col-6 container">
            <Link to="/">
              <div className="home-section">Home</div>
            </Link>
          </div>
          <div className="col-6">
            <SignedInLinks />
            {/* <SignedOutLinks /> */}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Navbar;
