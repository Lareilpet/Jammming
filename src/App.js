import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SearchResults from './Components/SearchResults/SearchResults.js';
import Playlist from './Components/Playlist/Playlist.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
      name: 'Help',
      artist: 'Pink',
      album: 'West',
      id: '45'
    },
     {
       name: 'Joy',
       artist: 'Pink',
       album: 'West',
       id: '48'
     },
     {
       name: 'Piano Man',
       artist: 'Billy Joel',
       album: 'Best',
       id: '206'
     },
      {
        name: 'Daniel',
        artist: 'Elton John',
        album: 'Greatest',
        id: '309'
      }
    ]};

    this.state.playlistName = "Party";
    this.state.playlistTracks = [
      {name: 'Jump',
      artist: 'Prince',
      album: 'Purple Rain',
      id: '242'
    },
    {name: 'Shout',
    artist: 'Prince',
    album: 'Purple',
    id: '248'
  },
  {name: 'Hello',
  artist: 'Adele',
  album: 'Skyfall',
  id: '772'
}
];
this.search = this.search.bind(this);
this.addTrack = this.addTrack.bind(this);
this.removeTrack = this.removeTrack.bind(this);
this.updatePlaylistName = this.updatePlaylistName.bind(this);
this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return this.state.playlistTracks;
} else{
   this.state.playlistTracks.push(track);
}
}

removeTrack(track) {
  let playlistTracks = this.state.playlistTracks;
  let i;
  for(i=playlistTracks.length - 1; i>=0; i-=1) {
    if (playlistTracks[i] === track) {
      playlistTracks.slice(i,1);
    }
    return playlistTracks;
}
}

/*removeTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    let newPlaylistTracks = playlistTracks.filter(track => {
      return track.id != savedTrack.id;
  });
   this.state.playlistTracks = newPlaylistTracks;
}*/

updatePlaylistName(name) {
  this.setState (
    {playlistName: name.target.value}
  )
}

search(term) {
  const searchTerm = this.state.term;
  console.log(searchTerm);
}

savePlaylist() {
  const trackURIs = this.playlistTracks.map(uri => {
    return
  })
}

  render() {
    return (
    <div>
     <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div class="App">
         <SearchBar onSearch={this.state.search}/>
         <div className="App-playlist">
           <SearchResults searchResults = {this.state.searchResults} onAdd={this.state.addTrack} />
           <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName}
            onRemove={this.state.removeTrack} onNameChange = {this.state.updatePlaylistName}
                     onSave={this.state.savePlaylist} />
         </div>
        </div>
     </div>

    );
  }
}

export default App;