import React from "react";
import PropType from "prop-types";
import "./Movie.css";


function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movies movie">
            <img src={poster} alt={title}/>
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>)
                ) }
            </ul>
            <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
    ); 
};

Movie.prototype = {
    id : PropType.number.isRequired,
    year :PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired
};

export default Movie;