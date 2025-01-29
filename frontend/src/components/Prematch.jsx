import React from 'react'
import styled from 'styled-components'
import mqtt from 'mqtt'

const StyledLed = styled.div`
    width: 1176px;
    height: 168px;
    background-image: url("/prematch.png");
`;

const StyledPrematch = styled(StyledLed)`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr ;
`;

const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    font-size: 100px;
`;

const Prematch =  () => {

  const client = mqtt.connect("wss://test.mosquitto.org:8081");
  client.on("connect", () => {});


  return(
    <StyledPrematch>
      <h1>210Y</h1>
      <StyledTitle>UP NEXT Q1</StyledTitle>
      <h1>210y</h1>
    </StyledPrematch>
  );

}

export default Prematch