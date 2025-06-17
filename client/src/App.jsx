import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import MainPage from './components/MainPage'
import axios from 'axios';
import { useEffect } from 'react'



// const fetchTranscript = async () => {
//   const videoId = ''; // Replace with user input

//   try {
//     const res = await axios.post('http://127.0.0.1:5000', {
//       video_id: videoId,
//     });
//     console.log(res.data.transcript); // Show in UI
//   } catch (error) {
//     console.error('Error fetching transcript:', error);
//   }
// };

// useEffect(() => {
//   fetchTranscript();
// }, []);


function App() {
  const [link,setLink] = useState("");
  const [transcript, setTranscript] = useState("");

  return (
    <div className="app-container">
      <Header />
      <MainPage link={link} setLink={setLink} transcript={transcript} setTranscript={setTranscript}/>
    </div>
  )
}

export default App
