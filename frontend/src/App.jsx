import './App.css'
import { Link } from "react-router";

function App() {

  return (
  <>
    <div>
        Home page mecha mayhem led screen
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "100px"}}>
          <Link to ="/dome"> dome </Link>
          <Link to ="/prairies"> prairies (HS) </Link>
          <Link to ="/rockies"> rockies (HS) </Link>
          <Link to ="/badlands"> badlands (VEXU) </Link>
          <Link to ="/foothills"> foothills (MS) </Link>

        </div>
    </div>
  </>
  )
}

export default App
