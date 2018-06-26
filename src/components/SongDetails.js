import React from 'react';

const SongDetails = (props) => {
  if(!props.song) return null;
  return(
    <div>
      <h1>{props.song["im:name"].label}</h1>
      <p>{props.song["im:artist"].label}</p>
      <img src={props.song["im:image"][2].label} alt="song cover art" />
    </div>
  )
}

export default SongDetails;
