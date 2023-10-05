import MovieList from './MovieList';
import MovieStats from './MovieStats';


function Main({ movies, watched }) {

    return (
        <div>
            <main className="main">
                <MovieList movies={movies} />
                <MovieStats watched={watched} />
            </main>
        </div>
    )
}

export default Main