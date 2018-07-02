
const clientId ='f48b3e05f288488f8ca1b472d4aa22d4';
const redirectUri = 'http://localhost:3000/';
let accessToken = " ";
let headers = " ";

const Spotify={

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {

    let accessToken = window.location.href.match(/access_token=([^&]*)/g);
    let expiresIn = window.location.href.match(/expires_in=([^&]*)/g);
      if (accessToken && expiresIn) {
        window.setTimeout(() => accessToken = ' ', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      } else  {
        window.location=
      `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;

      return accessToken;
    }
}
},


search(term) {
  const url='https://api.spotify.com/v1/search?type=track&q=';
   let endpoint = `${url}${term}`;

    fetch(endpoint,
      { headers: {Authorization: `Bearer ${accessToken}`}}
        ).then(response => {
      if (response.ok) {
             return response.json();
    }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then(jsonResponse => {
         let tracks = jsonResponse;
         let newTracks=tracks.map(track => {
                return  track={
                          id: track.id,
                          name: track.name,
                          artist: track.artist[0].name,
                          album: track.album,
                          URI: track.uri
                        };
          return newTracks;
  })
});
},



savePlaylist(playlistName, trackURIs) {
  if (!playlistName && !trackURIs) {
    return;
}},


getUser () {
  //let accessToken =  `Bearer ${accessToken}`;
  let headers={Authorization: `Bearer ${accessToken}`};

  fetch('https://api.spotify.com/v1/me',
  {headers: headers}).then(response=> {
      if (response.ok) {
        return response.json();
      }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    let user_id = jsonResponse;
    return user_id;
});
},

createPlaylist(newPlaylist) {

  let url = 'https://api.spotify.com/v1/users/';
  let playlist_id = " ";
  let user_id= " ";
  let headers={Authorization: `Bearer ${accessToken}`};
  let endpoint = `${url}${user_id}/playlists`;

  fetch(endpoint,
    {headers: headers,
      method: 'POST',
      body: JSON.stringify({id: playlist_id}) }).then(response => {
        if (response.ok) {
          return response.json();
        }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then(jsonResponse => {
        let playlist_id = jsonResponse;
        return playlist_id;
});
},

addPlaylistTracks(newTrackURIs) {
  let trackURIs = [];
  let url = 'https://api.spotify.com/v1/users/';
  let user_id=" ";;
  let playlist_id = " ";
  let endpoint = `${url}${user_id}/playlists/${playlist_id}/tracks`;
  fetch(endpoint,
      {headers: headers,
        method: 'POST',
        body: JSON.stringify({tracks: trackURIs}) }).then(response => {
          if (response.ok) {
            return response.json();
          }
        throw new Error('Request failed!');
      }, networkError => {
        console.log(networkError.message)
      }).then(jsonResponse => {
          let newTrackURIs = jsonResponse;
          trackURIs.push(newTrackURIs);
          return newTrackURIs;
});

}
}
export default Spotify;
