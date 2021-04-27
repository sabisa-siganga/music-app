import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import { faPause } from '@fortawesome/free-solid-svg-icons';
 
function Player(props){
    const audioEl = useRef(null); 
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioEl.current!=null){
            if(isPlaying) {
                audioEl.current.play();
            }else {
                audioEl.current.pause();
            }
        }
       },[isPlaying]);
        
    
    const SkipSong = (forwards = true) => {
        setIsPlaying(false)
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
            setIsPlaying(true) 
        }
    }

    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetails 
               song={props.songs[props.currentSongIndex]} />
            <PlayerControls 
                 isPlaying={isPlaying} 
                 setIsPlaying={setIsPlaying} 
                 SkipSong={SkipSong}
            />
            <p><strong>Next up:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    )
}

export default Player;