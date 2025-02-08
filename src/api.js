import axios from 'axios';

export const getTrendingFilms = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTUyMzBmZTkzOGUwYWEzOWMxMWY3NjQ5YzE2MWZhZSIsIm5iZiI6MTczODk3NTg0Ni4zNDksInN1YiI6IjY3YTZhYTY2NWZhNDJkN2U3NmYwZjg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBlf47O6gJXmoSPd_gY6isUefRdDfvSx-XudHC_-Eh0'
    }
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);
    return response.data.results;
  } catch (err) {
    console.error(err);
    throw err; 
  }
};



export const getSearchedListOfFilms = async (query) => { 
  const options = {
    method: 'GET',
    params: { query }, 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTUyMzBmZTkzOGUwYWEzOWMxMWY3NjQ5YzE2MWZhZSIsIm5iZiI6MTczODk3NTg0Ni4zNDksInN1YiI6IjY3YTZhYTY2NWZhNDJkN2U3NmYwZjg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBlf47O6gJXmoSPd_gY6isUefRdDfvSx-XudHC_-Eh0'
    }
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', options); 
    return response.data.results;
  } catch (err) {
    console.error(err);
    throw err; 
  }
}


export const fetchMovieById = async (movieId) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`, 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTUyMzBmZTkzOGUwYWEzOWMxMWY3NjQ5YzE2MWZhZSIsIm5iZiI6MTczODk3NTg0Ni4zNDksInN1YiI6IjY3YTZhYTY2NWZhNDJkN2U3NmYwZjg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBlf47O6gJXmoSPd_gY6isUefRdDfvSx-XudHC_-Eh0'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; 
  } catch (err) {
    console.error(err);
    throw err;
  }
};


export const fetchCast = async (movieId) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTUyMzBmZTkzOGUwYWEzOWMxMWY3NjQ5YzE2MWZhZSIsIm5iZiI6MTczODk3NTg0Ni4zNDksInN1YiI6IjY3YTZhYTY2NWZhNDJkN2U3NmYwZjg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBlf47O6gJXmoSPd_gY6isUefRdDfvSx-XudHC_-Eh0'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; 
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchReviews = async (movieId, page = 1) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`, 
    params: {
      language: 'en-US',
      page: page,
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTUyMzBmZTkzOGUwYWEzOWMxMWY3NjQ5YzE2MWZhZSIsIm5iZiI6MTczODk3NTg0Ni4zNDksInN1YiI6IjY3YTZhYTY2NWZhNDJkN2U3NmYwZjg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBlf47O6gJXmoSPd_gY6isUefRdDfvSx-XudHC_-Eh0'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; 
  } catch (err) {
    console.error(err);
    throw err;
  }
};