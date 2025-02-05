import {useState, useEffect} from 'react'
import {useSocket} from "../providers/SocketContext.jsx";

import Prematch from "../components/Prematch.jsx";
import {AbsoluteLED} from '../components/StyledComponents.jsx'
import {gapBetweenLeds} from "../constants.jsx";
import Postmatch from "../components/Postmatch.jsx";
import Inmatch from "../components/Inmatch.jsx";

function Dome() {
  const led1channel = "ab_innovates";
  const led2channel = "gov_ab";
  const [led1, setLed1] = useState(null)
  const [led2, setLed2] = useState(null)
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
      <img src={"/ab_innovates.png"} style={{position: "absolute", top: 0, left: 0}} alt="background for led1"/>
      <img src={"/gov_ab.png"} style={{position: "absolute", top: gapBetweenLeds, left: 0}} alt="background for led2"/>
      <h1 style={{position: 'absolute', top: 0, left: 1500}}>{led1channel} </h1>
      <h1 style={{position: 'absolute', top: gapBetweenLeds, left: 1500}}> {led2channel} </h1>
      <img src={led1} style={{position: "absolute", top: 0, left: 0}}/>
      <img src={led2} style={{position: "absolute", top: gapBetweenLeds, left: 0}}/>

      <AbsoluteLED position={0}>
        <Inmatch/>
      </AbsoluteLED>

      <AbsoluteLED position={1}>
        <Postmatch/>
      </AbsoluteLED>


    </div>
  );
}

export default Dome