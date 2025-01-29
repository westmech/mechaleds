import './App.css'
import styled from 'styled-components'
import logo from '../public/logo.svg'

const StyledTitle = styled.div`
  margin-top: 500px;
  font-size:  100px;
`;

const StyledImg = styled.img`
    width: 300px;
`;

const StyledLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    font-size: 40px;
    background: white;
`;

import { Link } from "react-router";

function App() {

  return (
  <>
    <div>
      <StyledTitle>mecha mayhem led screens</StyledTitle>
      <StyledImg src={logo} />
        <StyledLinks>
          <Link to ="/dome"> dome </Link>
          <Link to ="/prairies"> prairies (HS) </Link>
          <Link to ="/rockies"> rockies (HS) </Link>
          <Link to ="/badlands"> badlands (VEXU) </Link>
          <Link to ="/foothills"> foothills (MS) </Link>

        </StyledLinks>
    </div>
  </>
  )
}

export default App
