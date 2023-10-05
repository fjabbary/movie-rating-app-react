import React from 'react'
import WatchedMovieItem from './WatchedMovieItem'

function WatchedMovieList({ watched }) {
    return (
        <div>
            <ul className="list">
                {watched.map((movie) => (
                    <WatchedMovieItem movie={movie} key={movie.imdbID} />
                ))}
            </ul>
        </div>
    )
}

export default WatchedMovieList