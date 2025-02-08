import {useState, useEffect} from 'react'
import {useSocket} from "../providers/SocketContext.jsx";
import background from "../../public/background.png"

function Foothills() {
  const led1channel = "eaton";
  const led2channel = "garmin";
  const led3channel = "tks";
  const [led1, setLed1] = useState("eaton.gif")
  const [led2, setLed2] = useState("garmin.gif")
  const [led3, setLed3] = useState("tks.gif")

  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on(led1channel, (url) => {
      setLed1(url);
    });

    socket.on(led2channel, url => {
      setLed2(url)
    })

    socket.on(led3channel, url => {
      setLed3(url)
    })

    return () => {
      socket.off(led1channel);
      socket.off(led2channel)
      socket.off(led3channel)
    };
  }, [socket]);

  return (
    <div>
      <img src={background} style={{position: "absolute", top: 0, left: 0}} alt="background for led1"/>
      <img src={background} style={{position: "absolute", top: 200, left: 0}} alt="background for led2"/>
      <img src={background} style={{position: "absolute", top: 400, left: 0}} alt="background for led3"/>
      <h1 style={{position: 'absolute', top: 0, left: 1500}}>{led1channel} </h1>
      <h1 style={{position: 'absolute', top: 200, left: 1500}}> {led2channel} </h1>
      <h1 style={{position: 'absolute', top: 400, left: 1500}}> {led3channel} </h1>

      <img src={led1} style={{position: "absolute", top: 0, left: 0}} alt="led 1"/>
      <img src={led2} style={{position: "absolute", top: 200, left: 0}} alt="led 2"/>
      <img src={led3} style={{position: "absolute", top: 400, left: 0}} alt="led 3"/>


    </div>
  );
}

export default Foothills