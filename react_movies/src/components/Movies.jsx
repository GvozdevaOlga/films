import { Movie } from './Movie';
import { Link } from "react-router";
import chilk from '../assets/chilk.png';

export function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) =>
                    <Link to={`/movie/${movie.imdbID}`}>
                        <Movie key={movie.imdbID} {...movie} />
                    </Link>
                )) : (
                <div className='utka_found'>
                    <h4>Not Found</h4>
                    <img src={chilk} alt="" />
                </div>
            )}
        </div>
    );
}