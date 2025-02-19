import {useState} from 'react'
import styled from 'styled-components'
import mqtt from 'mqtt'

const StyledLed = styled.div`
    width: 1176px;
    height: 168px;
`;

const StyledPrematch = styled(StyledLed)`
    display: grid;
    grid-template-columns: 50px 1fr 2fr 1fr 50px ;
`;

const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    font-size: 50px;
`;

const Ranks = styled.div`
    font-size: 50px;
    text-align: ${props => props.align};
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0px;
`;
const Teams = styled.div`
    font-size: 70px;
    text-align: ${props => props.align};
    padding: 0 5px;
    display: flex;
    flex-direction: column;
`;

const Prematch =  () => {
  const [red1, setRed1] = useState("red1")
  const client = mqtt.connect("wss://test.mosquitto.org:8081");
  client.on("connect", () => {});

  return(
    <StyledPrematch>
      <Ranks align={"center"}>
        <div>14</div>
        <div>1</div>
      </Ranks>
      <Teams align={"left"}>
        <div>210X</div>
        <div>6659C</div>
      </Teams>
      <StyledTitle>Q1</StyledTitle>
      <Teams align={"right"}>
        <div>210y</div>
        <div>99197H</div>
      </Teams>
      <Ranks align={"center"}>
        <div>10</div>
        <div>12</div>
      </Ranks>
    </StyledPrematch>
  );

}

export default Prematch