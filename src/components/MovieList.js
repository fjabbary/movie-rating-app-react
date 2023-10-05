import React, { useState } from 'react'
import MovieItem from './MovieItem';

function MovieList({ movies }) {
    const [isOpen1, setIsOpen1] = useState(true);

    return (
        <div>
            <div className="box">
                <button
                    className="btn-toggle"
                    onClick={() => setIsOpen1((open) => !open)}
                >
                    {isOpen1 ? "–" : "+"}
                </button>
                {isOpen1 && (
                    <ul className="list">
                        {movies?.map((movie) => (
                            <MovieItem movie={movie} key={movie.imdbID} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default MovieList