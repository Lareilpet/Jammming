import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
     this.props.onNameChange = ({name: event.target.value});
  }

  render() {
    return (
    <div className = 'Playlist'>
      <input onChange = {this.handleNameChange} defaultValue = {'New Playlist'}/>
      <TrackList tracks = {this.props.playlistTracks} playlistName={this.props.playlistName}
      onRemove = {this.props.onRemove}
       isRemoval={true}  />
      <a className = 'Playlist-save' onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
  );
  }
}
export default Playlist;