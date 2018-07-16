import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  //  this.renderAction = this.renderAction.bind(this);
 }

  addTrack(track) {
    this.props.onAdd(this.props.track);
  }


  removeTrack() {
    this.props.onRemove(this.props.track);
  }


  render() {
    return (
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist}|{this.props.track.album}</p>
      </div>
      <div className="Track-action">
      {this.props.isRemoval ?  (
            <a onClick={this.removeTrack}>-</a>
          ) : (
            <a onClick={this.addTrack}>+</a>
          )}
       </div>
    </div>
   );
}
}

export default Track;
