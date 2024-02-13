import './App.css'
import Home from './Components/Home';
import NumberDisplay from './Components/NumberDisplay';
import ColoredWordDisplay from './Components/ColoredWordDisplay';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:input" element={<NumberDisplay />} />
          <Route path="/:word/:wordColor/:backgroundColor" element={<ColoredWordDisplay />} />
          {/* Each path parameter is prepended by a colon */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
