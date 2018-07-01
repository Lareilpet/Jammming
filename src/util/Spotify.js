
const clientId ='f48b3e05f288488f8ca1b472d4aa22d4'
const redirectUri = 'http://localhost:3000/';
const user = {
  id: ''
};
const searchTerm='';


const accessToken = '';


const Spotify={

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
    let accessToken = window.location.href.match(/access_token=([^&]*)/g);
    let expiresIn = window.location.href.match(/expires_in=([^&]*)/g);
      if (accessToken && expiresIn) {
          return accessToken;
        //  return expiresIn;
      } else  {
        window.locationl=`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}``;
    }
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
}


search(term) {
   let searchTerm = term;
   const endpoint = 'https://api.spotify.com/v1/search?type=track&q=${searchTerm}';

    fetch(endpoint, {
       headers: {Authorization: 'Bearer ${accessToken}''}
       }

    ).then(response => {
      if (response.ok) {
        return response.json();
      }
        let tracks = response.json();
        let track={
          track.id: '',
          track.name: '',
          track.artists[0].name: '',
          track.album.name: '',
          track.uri: ''
        };
        tracks.map(track => {
          console.log(track);
      })
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then(jsonResponse => {
      renderResponse(jsonResponse);
    });
  }


savePlaylist(playlistName, trackURIs) {
  if (!playlistName && !trackURIs) {
    return;
  }
} else {
  get user() {
    fetch('https://api.spotify.com/v1/me',
    {headers: headers,
      method: 'POST',
      body: JSON.stringify({id: userID}) }).then(response => {
        if (response.ok) {
          return response.json();
        }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then(jsonResponse => {
      renderResponse(jsonResponse);
    });
    let userID = jsonResponse;
  }

  let accessToken =  'Bearer ${accessToken}';
  let headers={Authorization: 'Bearer ${accessToken}`};
//  let userID = user.id;
  let endpoint = 'https://api.spotify.com//v1/users/{user_id}/playlists/{playlist_id}/tracks';
  fetch(endpoint,
    {headers: '',
      method: 'POST',
      body: JSON.stringify({id: ""}) }).then(response => {
        if (response.ok) {
          return response.json();
        }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then(jsonResponse => {
      let response = jsonResponse;

  let playlistID=response.id;
  user.playlists.push(playlistID);
});
}

}
}
export default Spotify;
