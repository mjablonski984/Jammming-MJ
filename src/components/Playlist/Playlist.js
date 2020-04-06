import React from 'react';
import Tracklist from '../TrackList/TrackList';
import './Playlist.css';

export default function Playlist(props) {
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input
        placeholder="Name your playlist"
        defaultValue={'New Playlist'}
        onChange={handleNameChange}
        onFocus={(e) => (e.target.value = '')}
      />
      <Tracklist tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
