import React from 'react'
import {Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledWrapper = styled.div`
.signedoutlinks{
  font-size:18px;
  font-weight:800;
}
`

export default function SignedOutLinks () {
  return(
    <StyledWrapper>
      <div className="container signedoutlinks">
        <div className="col-6">
          <Link to="/signup">
              Sign up
          </Link>
        </div>
        <div className="col-6">
          <Link to="/posts">
              Posts
          </Link>
          </div>
      </div>
    </StyledWrapper>
  )
}
