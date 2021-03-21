import React from 'react'
import {Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledWrapper = styled.div`
.signedinlinks{
  font-size:18px;
  font-weight:800;
}
`

export default function SignedInLinks () {
  return(
    <StyledWrapper>
      <div className="container signedinlinks">
        <div className="row">
          <div className="col-6">
            <Link to="/project">
                New Project
            </Link>
          </div>
          <div className="col-6">
            <Link to="/profile">
                Profile
            </Link>
            </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
