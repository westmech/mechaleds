import {useState, useEffect} from 'react'
import {useSocket} from "../providers/SocketContext.jsx";
import background from "../../public/background.png"

function Badlands() {
  const led1channel = "eaton";
  const led2channel = "garmin";
  const led3channel = "tks";
  const [led1, setLed1] = useState("attabotics.gif")

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

      <img src={led1} style={{position: "absolute", top: 0, left: 0, width: 896}} alt="led 1"/>


    </div>
  );
}

export default Badlands