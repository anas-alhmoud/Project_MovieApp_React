import { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import setMovie, {FavoriteRemoved} from '../action'

const FavoriteMovies = props => {

    
    const dispatch = useDispatch()
    const history = useHistory();
    const favoriteList = useSelector(state => state.favoriteList)

    const [movieListState, setMovieListState] = useState([]);
    useEffect(() => {
       setMovieListState(
            favoriteList
        )
    }, [favoriteList])

    function showDetails(movie){
        dispatch(setMovie(movie))
        history.push("/details")
    }

    function removeFavorited(movie){
        dispatch(FavoriteRemoved(movie.id))
    }

    return (
        <>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
            {
        movieListState.map(movie => (
            <Box mt={5} >
            <Card style={{ width: 350, textAlign: "center"}}>
                <CardActionArea onClick={() => showDetails(movie)}>
                    <CardMedia style={{height: 600, width: "100%"}}
                        image={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                        title={movie.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea  >
                <button type="button" class="btn btn-outline-dark" onClick={() => removeFavorited(movie)}>x</button>
                </CardActionArea>
                <br/>
            </Card>
            </Box>
        )
        )
}
        </Box>
        </>

)}
export default FavoriteMovies