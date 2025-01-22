import './App.css'


function App() {

  const url = "http://localhost:3000/gifs/rockies.gif";
  return (
      <>
          <img src={url} alt="Example GIF" style={{position: "absolute", top: 0, left: 0}}/>
      </>
  )
}

export default App
