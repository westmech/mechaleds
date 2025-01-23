import {useState, useEffect} from 'react'
import {useSocket} from "../providers/SocketContext.jsx";

function Dome() {
  const [led1, setLed1] = useState("http://localhost:3000/gifs/rockies.gif")
  const [led2, setLed2] = useState("http://localhost:3000/gifs/rockies.gif")

  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    // Listen for messages from the server
    socket.on('dome', (url) => {
      setLed1(url);
    });

    // Cleanup the event listener on unmount
    return () => {
      socket.off('dome');
    };
  }, [socket]);

  return (
    <div>
      <img src={led1} style={{position: "absolute", top: 0, left: 0}} alt="led 1"/>
      <img src={led2} style={{position: "absolute", top: 200, left: 0}} alt="led 2"/>

    </div>
  );
}

export default Dome