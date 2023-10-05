import React, { useState } from 'react';
import MoviesSummary from './MoviesSummary';
import WatchedMovieList from './WatchedMovieList';

function MovieStats({ watched }) {
    const [isOpen2, setIsOpen2] = useState(true);
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                    <MoviesSummary watched={watched} />
                    <WatchedMovieList watched={watched} />
                </>
            )}
        </div>
    )
}

export default MovieStats