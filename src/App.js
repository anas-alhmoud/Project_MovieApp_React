import PopularMovies from "./components/PopularMovies";
import SearchForMovies from "./components/SearchForMovies";
import MovieDetails from './components/MovieDetails'
import FavoriteMovies from './components/FavoriteMovies'
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
import { useTranslation, Trans } from "react-i18next"

const lngs = {
  en: { language: "English" },
  ar: { language: "العربية" },
}


function App() {
  const { i18n } = useTranslation()

  return (
    <div className="App">
      <Router>
      <AppBar position="static">
        <Toolbar style={{justifyContent:"space-between"}}>
      
          <Box mr={3}>
            <Typography variant="h6">
              Movie app
            </Typography>
          </Box>
          <Box style={{justifyContent:"space-between"}}>
            <Link to="/" style={{ textDecoration: 'none', color: "inherit" ,  marginLeft:"20px" }}>
              <Trans i18nKey="tabOne"><Button color="inherit">
                  Popular movies
                </Button></Trans>            
              </Link>
            
              <Link to="/search" style={{ textDecoration: 'none', color: "inherit", marginLeft:"20px" }}>
              <Trans i18nKey="tabTow">  <Button color="inherit">
                  Search for movies
                </Button></Trans>
              </Link>

              <Link to="/favorite" style={{ textDecoration: 'none', color: "inherit", marginLeft:"20px" }}>
              <Trans i18nKey="tabThree">  <Button color="inherit">
                Favorite Movies
                </Button></Trans>
              </Link>
          </Box>
           

           <Box >
             
           {Object.keys(lngs).map((lng) => (
            <Button 

          
              key={lng}
              style={{ fontWeight: i18n.language === lng ? "bold" : "normal" , marginLeft:"50px", color: "inherit"}}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].language}
            </Button>
          ))}
             </Box> 
        
    
        </Toolbar>
      </AppBar>
        <Switch>
          <Route exact path="/" component={PopularMovies}/>
          <Route path="/search" component={SearchForMovies} />
          <Route path="/details" component={MovieDetails} />
          <Route path="/favorite" component={FavoriteMovies} />
          <Route path="*">
            <Redirect to={{ pathname: '/' }} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
