import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SearchResults from './Components/SearchResults/SearchResults.js';
import Playlist from './Components/Playlist/Playlist.js';
import Spotify from './util/Spotify.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [/*{
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
      }*/
    ]};
    //this.state.term = "";
    this.state.playlistName = "";
    this.state.playlistTracks = [
    /*  {name: 'Jump',
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
}*/
];
this.search = this.search.bind(this);
this.addTrack = this.addTrack.bind(this);
this.removeTrack = this.removeTrack.bind(this);
this.updatePlaylistName = this.updatePlaylistName.bind(this);
this.savePlaylist = this.savePlaylist.bind(this);
  }

addTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return playlistTracks;
} else{
    let updatedPlaylistTracks = this.state.playlistTracks.push(track);
    return updatedPlaylistTracks;
}
}

removeTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    let newPlaylistTracks = playlistTracks.filter(currentTrack => {
      return currentTrack !== track.id;
  });
  this.setState (
    {playlistTracks: newPlaylistTracks},
    {searchResults: Spotify.search()}
  )
}

updatePlaylistName(newPlaylistName) {
  this.setState (
    {playlistName: newPlaylistName}
  )
}

search(term) {
//  Spotify.search(term);
//  console.log(searchTerm);
Spotify.search(term).then(tracks =>
       this.setState({searchResults: tracks}));
}

savePlaylist() {
  Spotify.savePlaylist();
  this.setState (
    {playlistName: 'New Playlist',
    playlistTracks: []}
  )

  }


render () {
    return (
    <div>
     <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div class="App">
         <SearchBar onSearch={this.search}/>
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
