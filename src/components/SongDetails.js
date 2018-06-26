import React from 'react';

const SongDetails = (props) => {
  if(!props.song) return null;
  return(
    <div>
      <h1>{props.song["im:name"].label}</h1>
    </div>
  )
}

export default SongDetails;
