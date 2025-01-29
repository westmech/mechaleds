import styled from 'styled-components'
import {gapBetweenLeds} from "../constants.jsx";

const AbsoluteLED = styled.div`
    position: absolute;
    top: ${(props) => `${props.position*gapBetweenLeds}px`};
    left: 0;
`;


export {
  AbsoluteLED,
};