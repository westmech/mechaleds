import {useState, useEffect} from 'react'
import {useSocket} from "../providers/SocketContext.jsx";
import background from "../../public/background.png"

function Dome() {

  const [led1, setLed1] = useState("http://localhost:3000/gifs/countdown.gif")
  const [led2, setLed2] = useState("http://localhost:3000/gifs/rockies.gif")

  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on('dome ab_innovates', (url) => {
      setLed1(url);
    });

    socket.on('dome gov_ab', url => {
      setLed2(url)
    })

    return () => {
      socket.off('dome ab_innovates');
      socket.off('dome gov_ab')
    };
  }, [socket]);

  return (
    <div>
      <img src={background} style={{position: "absolute", top: 0, left: 0}} alt="background for led1"/>
      <img src={background} style={{position: "absolute", top: 200, left: 0}} alt="background for led2"/>
      <h1 style={{position: 'absolute', top: 0, left: 1500}}> AB innovates </h1>
      <h1 style={{position: 'absolute', top: 200, left: 1500}}> GOV AB </h1>

      <img src={led1} style={{position: "absolute", top: 0, left: 0}} alt="led 1"/>
      <img src={led2} style={{position: "absolute", top: 200, left: 0}} alt="led 2"/>

    </div>
  );
}

export default Dome