import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const MovieDetails = props => {
    const movie = useSelector(state => state.movieReducer)
    return (
        <Box display="flex" width={1600} margin={"auto"} mt={5}>
            <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} height={600} alt="movie"/>
            <Box ml={5} mt={5}>
                <Typography variant="h3">
                    {movie.title}
                </Typography>
                <Typography style={{marginTop: 30}}>
                    Rating: {movie.vote_average}
                </Typography>
                <Typography>
                    Relase Date: {movie.release_date}
                </Typography>
                <Typography style={{marginTop: 30}}>
                    {movie.overview}
                </Typography>
            </Box>
        </Box>
    )
}

export default MovieDetails
