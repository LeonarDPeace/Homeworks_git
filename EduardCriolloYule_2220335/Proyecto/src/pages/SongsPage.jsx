// src/pages/SongsPage.jsx
import React, { useState } from 'react';
import { LinkedList } from '../utils/LinkedList';

const SongsPage = () => {
    const [playlist, setPlaylist] = useState(new LinkedList());
    const [currentSong, setCurrentSong] = useState(null);

    const addSong = () => {
        const songName = prompt("Enter the song name:");
        if (songName) {
            playlist.append(songName);
            setPlaylist(playlist);
        }
    };

    const playNext = () => {
        if (currentSong) {
            const nextSong = currentSong.next;
            if (nextSong) {
                setCurrentSong(nextSong);
            }
        } else if (playlist.head) {
            setCurrentSong(playlist.head);
        }
    };

    return (
        <div className="text-center">
            <h1 className="mb-4">Songs Playlist</h1>
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={addSong}>
                    Add Song
                </button>
                <button className="btn btn-success" onClick={playNext}>
                    Play Next
                </button>
            </div>
            <div className="card text-center" style={{ width: '18rem', margin: '0 auto' }}>
                <div className="card-body">
                    <h5 className="card-title">Now Playing</h5>
                    <p className="card-text">
                        {currentSong ? currentSong.value : "No song playing"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SongsPage;