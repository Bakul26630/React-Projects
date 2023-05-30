import React, { useState, useEffect } from 'react'
import { API_URL } from './context';
import { useParams, useNavigate } from 'react-router-dom'
import "./SingleMovie.css"

const SingleMovieCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const { id } = useParams();
  const navigate  = useNavigate();

  useEffect(() => {
    const getMovies = async (url) => {
      setIsLoading(true)
      try {
        const apiData = await fetch(url)
        const data = await apiData.json()
        if (data.Response === "True") {
          setIsLoading(false)
          setMovies(data)
        }
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    let timer = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`)
    }, 2000)
    return () => clearTimeout(timer)
  }, [id])

  if (isLoading) {
    return (<>
      <div className='loading-container'>
        <div className="loading">
          Loading...
        </div>
      </div>
    </>)
  }
  else {
    return (<>
      <div className='single-movie-container'>
        <div className="single-movie-card">
          <div className="image">
            <img src={movies.Poster} alt={movies.Title} />
          </div>
          <div className="content">
            <h1 className='mb-3 movie-title'>{movies.Title}</h1>
            <h3 className='mb-3 Released-date'>Released Date: {movies.Released}</h3>
            <h3 className='mb-3 country'>Country: {movies.Country}</h3>
            <p className='mb-3 plot'>{movies.Plot}</p>
            <h5 className='mb-3 genre'>{movies.Genre}</h5>
            <h5 className='mb-3 language'>{movies.Language}</h5>
            <h4 className='mb-3 rating'>Imdb-Rating: {movies.imdbRating}/10</h4>
            <button className='Back-btn' onClick={()=>{
              navigate(-1);
            }}>Go Back</button>
          </div>
        </div>
      </div>
    </>)
  }
}

export default SingleMovieCard
