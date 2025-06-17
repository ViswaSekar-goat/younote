import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import MainPage from './components/MainPage'
import axios from 'axios';
import { useEffect } from 'react'



function App() {
  const [link,setLink] = useState("");
  const [transcript, setTranscript] = useState("");

  return (
    <div className="app-container">
      <Header/>
      <MainPage link={link} setLink={setLink} transcript={transcript} setTranscript={setTranscript}/>
    </div>
  )
}

export default App
