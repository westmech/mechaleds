import {useState, useEffect} from 'react'
import {useSocket} from "../providers/SocketContext.jsx";
import background from "../../public/background.png"
import Prematch from "../components/Prematch.jsx";
import {AbsoluteLED} from '../components/StyledComponents.jsx'
import {gapBetweenLeds} from "../constants.jsx";

function Dome() {
  const led1channel = "ab_innovates";
  const led2channel = "gov_ab";
  const [led1, setLed1] = useState("")
  const [led2, setLed2] = useState("")

  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on(led1channel, (url) => {
      setLed1(url);
    });

    socket.on(led2channel, url => {
      setLed2(url)
    })

    return () => {
      socket.off(led1channel);
      socket.off(led2channel)
    };
  }, [socket]);

  return (
    <div>
      <img src={background} style={{position: "absolute", top: 0, left: 0}} alt="background for led1"/>
      <img src={background} style={{position: "absolute", top: gapBetweenLeds, left: 0}} alt="background for led2"/>
      <h1 style={{position: 'absolute', top: 0, left: 1500}}>{led1channel} </h1>
      <h1 style={{position: 'absolute', top: gapBetweenLeds, left: 1500}}> {led2channel} </h1>
      { true &&
        <AbsoluteLED position={2}>
          <Prematch/>
        </AbsoluteLED>}

      <img src={led1} style={{position: "absolute", top: 0, left: 0}} alt="led 1"/>
      <img src={led2} style={{position: "absolute", top: gapBetweenLeds, left: 0}} alt="led 2"/>

    </div>
  );
}

export default Dome