import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  renderAction() {
    return (
     <div className="Track-action">
       {this.props.isRemoval ? (
       <a onClick={this.removeTrack}>-</a>)
        : (<a onClick={this.addTrack}>+</a>)}
      </div>
    );
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
    <div className="Track">
      <div className="Track-information">
        <h3>{this.track.name}</h3>
        <p>{this.track.artist}|{this.track.album}</p>
      </div>
        <a className="Track-action">{this.renderAction}</a>
    </div>
   );
}
}
export default Track;