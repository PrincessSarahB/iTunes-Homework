import React from 'react';

class ItunesBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    }
  }


  render(){
    return(
      <div>
        <SongSelector songs={this.state.songs}/>
      </div>
    )
  }
}

export default ItunesBox;
