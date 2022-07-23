import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import './Banner.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies);


    return (
        <div className="row">
            <div className="banner_posters">
                {movies.map(movie => (
                    <img className="banner_poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}

            </div>
        </div>
    )
}

export default Banner