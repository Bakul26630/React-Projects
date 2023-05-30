import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseGlobalContextProvider } from './context'
import MovieCard from './MovieCard'
import Search from './Search'
const Movie = () => {
  const { movies } = UseGlobalContextProvider();
  return (
    <div className='container-fluid main pb-5'>
      <div className="row">
        <div className="col-11 mx-auto">
          <Search />
          {/* Movie Container */}
          <div className="container my-5">
            <div className="row gy-5 gx-5">

              {
                movies.map((element) => {
                  let Title = element.Title;
                  if (element.Title.length > 15) {
                    Title = element.Title.substring(0, 15) + "..."
                  }
                  return (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={element.imdbID}>
                      <NavLink to={`movie/${element.imdbID}`} className="poster-link">
                        <MovieCard Title={Title} poster={element.Poster} />
                      </NavLink>
                    </div>
                  )
                })
              }

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Movie
