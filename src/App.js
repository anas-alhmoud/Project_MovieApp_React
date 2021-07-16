import PopularMovies from "./components/PopularMovies";
import SearchForMovies from "./components/SearchForMovies";
import MovieDetails from './components/MovieDetails'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Typography, Box, Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
      <AppBar position="static">
        <Toolbar>
          <Box mr={3}>
            <Typography variant="h6">
              Movie app
            </Typography>
          </Box>
            <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
              <Button color="inherit">
                Popular movies
              </Button>
            </Link>
              <Link to="/search" style={{ textDecoration: 'none', color: "inherit" }}>
                <Button color="inherit">
                  Search for movies
                </Button>
              </Link>
        </Toolbar>
      </AppBar>
        <Switch>
          <Route exact path="/" component={PopularMovies}/>
          <Route path="/search" component={SearchForMovies} />
          <Route path="/details" component={MovieDetails} />
          <Route path="*">
            <Redirect to={{ pathname: '/' }} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
