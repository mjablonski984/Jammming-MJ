import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

export default function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track
            key={track.id}
            track={track}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
          />
        );
      })}
    </div>
  );
}
