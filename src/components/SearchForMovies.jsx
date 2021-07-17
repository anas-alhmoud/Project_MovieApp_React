import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { useState } from "react";
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux'
import setMovie from '../action'

import { Trans } from "react-i18next"

const SearchForMovies = props => {
    const [searchState, setSearchState] = useState("")
    const [movieListState, setMovieListState] = useState([]);

    const search = async () => {
        try{
            let res = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=a7a1ed8342890174da1fe4df3aa911b2&query=" + searchState)
            setMovieListState(
                res.data.results
            )
        } catch {
            setMovieListState([])
        }

    }

    const history = useHistory();
    const dispatch = useDispatch()

    function showDetails(movie){
        dispatch(setMovie(movie))
        history.push("/details")
    }

    return (
        <Box mt={5} textAlign={"center"}>
            <Typography variant="h3">
            <Trans i18nKey="tabTow"> 
                Search for movies
                </Trans>
            </Typography>
            <br/>

            <Box display="flex" justifyContent="space-around" style={{ width: 700, margin: "auto" }}>

                <TextField value={searchState} onChange={(e) => setSearchState(e.target.value)} variant="outlined" style={{ width: 600 }}/>
                    <Button color="primary" variant="contained" onClick={search}>
                    <Trans i18nKey="serBot"> 

                    Search
                    </Trans>
                </Button>
                
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around">
            { movieListState.length > 1 &&
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
            </Card>
            </Box>
        )
        )
}
        </Box>
        </Box>
    )
}

export default SearchForMovies
