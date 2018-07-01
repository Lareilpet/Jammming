import React from 'react';
import './TrackList.css';

import Track from '../Track/Track.js';

class TrackList extends React.Component {

  render() {
    //  <!-- You will add a map method that renders a set of Tack components  -->
    return (
      <div className="TrackList">
         {this.props.tracks.map(track => {
           return (
          <Track track={track} key={track.id} name={track.name}
           artist={track.artist} album = {track.album}
           onAdd = {this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
      ); })

     }
      </div>
   );
  }
}

export default TrackList;
