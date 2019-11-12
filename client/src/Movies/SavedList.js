import React from 'react';
import {Link,NavLink , Switch} from 'react-router-dom'
const SavedList = props => (
  
  <div className="saved-list">
    {console.log(props)}
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
        <NavLink className="saved-movie" activeClassName='active' to={`/movies/${movie.id}`} key={movie.title} >{movie.title}</NavLink>
    ))}
    <Link className="home-button" to='/'>Home</Link>
  </div>
);

export default SavedList;
