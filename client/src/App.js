import React, { useState } from 'react';
import {Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import {Container, Paper} from '@material-ui/core';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Container>
        <Paper>
            <Route exact path='/movies/:id' render={() => <Movie addToSavedList= {addToSavedList}/>}/>
            <Route exact path='/' render={() => <MovieList/>}/>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
