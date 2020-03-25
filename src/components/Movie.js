import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieBox = styled.div`
    width: 45%; background-color: white; margin-bottom: 70px;font-weight: 300;padding: 20px; border-radius: 5px; color: #adaeb9;box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    a {
      display: flex;align-items: flex-start;justify-content: space-between;text-decoration: none;color: inherit;
    }
    img {
      position: relative;top: -50px; max-width: 150px;width: 100%;margin-right: 30px; box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }
    h3 {
        margin: 0;font-weight: 300; margin-bottom: 5px;font-size: 24px; color: #2c2c2c;
    }
    h5 {
        margin-right: 10px;font-size: 14px;font-weight: 300;
    }
    ul {
        list-style: none;padding: 0; margin: 0; display: flex;margin: 5px 0px;
        li { margin-right: 10px; font-size: 14px;}
    }
`
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <MovieBox>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div>
          <h3>{title}</h3>
          <h5>{year}</h5>
          <ul>
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p>{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </MovieBox>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;