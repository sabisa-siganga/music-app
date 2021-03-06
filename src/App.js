import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
  {
      title: "Good-morning",
      artist: "Kanye West",
      img_src:"./images/good.jpg",
      src: "./music/good-morning.mp3"
  },
  {
      title: "Forget me too",
      artist: "Machine Gun Kelly ft. Hasley",
      img_src:"./images/machine.jpg",
      src: "./music/forget-me-too.mp3"
  },
  {
      title: "Naked",
      artist: "Ella Mia",
      img_src:"./images/naked.jpg",
      src: "./music/naked.mp3"
  },
  {
      title: "Part-Time Lover",
      artist: "Dabin ft. Claire Ridgely",
      img_src:"./images/part-time.jpg",
      src: "./music/part-time-lover.mp3"
  }
])

const[currentSongIndex, setCurrentSongIndex] = useState(0);
const[nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  
useEffect(() => {
  setNextSongIndex(() => {
    if (currentSongIndex + 1 > songs.length - 1) {
      return 0;
    } else {
      return currentSongIndex + 1;
    }
  });
}, [songs.length, currentSongIndex]);

 return (
    <div className="App">
       <Player 
         currentSongIndex={currentSongIndex}
         setCurrentSongIndex={setCurrentSongIndex}
         nextSongIndex={nextSongIndex}
         songs={songs}
       />
    </div>
  );
}

export default App;



