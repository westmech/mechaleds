import {useState} from 'react'
import styled from 'styled-components'
import mqtt from 'mqtt'

const StyledLed = styled.div`
    width: 1176px;
    height: 168px;
    background: linear-gradient(
        to right,
        #209dec ${(props) => props.split || 50}%,
        #ec1f34 ${(props) => props.split || 50}%
    );
`;

const StyledPrematch = styled(StyledLed)`
    display: grid;
    grid-template-columns: 50px 1fr 3fr 1fr 50px ;
`;

const CenterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const Time = styled.div`
  font-size: 60px;
`;

const Score =styled.div`
    font-size: 100px;
  
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

const Inmatch =  () => {
  const [red1, setRed1] = useState("red1")
  const split = 100

  return(
    <StyledPrematch split={Math.min(65, (Math.max(35,split )))}>
      <Ranks align={"center"}>
        <div>14</div>
        <div>1</div>
      </Ranks>
      <Teams align={"left"}>
        <div>210X</div>
        <div>6659C</div>
      </Teams>
      <CenterDiv>
        <Score>100</Score>
        <Time>2:00</Time>
        <Score>100</Score>
      </CenterDiv>

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

export default Inmatch