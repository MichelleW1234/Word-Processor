import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css'

import Homescreen from "./components/Homescreen/components/Homescreen.jsx";
import Docscreen from "./components/Docscreen/components/Docscreen.jsx";
import Trashscreen from "./components/Trashscreen/components/Trashscreen.jsx";

function App() {

  return (
    <>
      <div>
        <HashRouter>
          <Routes>
            <Route index element={<Homescreen/>}/>
            
            <Route path="/home" element={<Homescreen />}/>
            <Route path="/document" element={<Docscreen />}/>
            <Route path="/trash" element={<Trashscreen />}/>

          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
