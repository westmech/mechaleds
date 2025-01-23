import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dome from './pages/dome.jsx'
import Foothills from "./pages/foothills.jsx";
import Prairies from "./pages/prairies.jsx";
import Rockies from "./pages/rockies.jsx";
import Badlands from "./pages/badlands.jsx";
import { SocketProvider } from './providers/SocketContext.jsx';


import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="dome" element={<Dome/>}/>
          <Route path="foothills" element={<Foothills/>}/>
          <Route path="prairies" element={<Prairies/>}/>
          <Route path="rockies" element={<Rockies/>}/>
          <Route path="badlands" element={<Badlands/>}/>

        </Routes>
      </BrowserRouter>
    </SocketProvider>
  </StrictMode>,
)
