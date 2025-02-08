import {useState, useEffect} from 'react'
import {useSocket} from "../providers/SocketContext.jsx";
import background from "../../public/background.png"

function Prairies() {
  const led1channel = "vex";
  const led2channel = "tc_energy";
  const led3channel = "encore";

  const [led1, setLed1] = useState("innovate_calgary.gif")
  const [led2, setLed2] = useState("tourism_calgary.gif")
  const [led3, setLed3] = useState("uofa.gif")

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
      <h1 style={{position: 'absolute', top: 0, left: 1500}}>{led1channel} </h1>
      <h1 style={{position: 'absolute', top: 200, left: 1500}}> {led2channel} </h1>
      <h1 style={{position: 'absolute', top: 400, left: 1500}}> {led3channel} </h1>

      <img src={led1} style={{position: "absolute", top: 20, left: 20, width: 896}} alt="led 1"/>
      <img src={led2} style={{position: "absolute", top: 150, left: 20, width: 896}} alt="led 2"/>
      <img src={led3} style={{position: "absolute", top: 280, left: 20, width: 896}} alt="led 3"/>


    </div>
  );
}

export default Prairies