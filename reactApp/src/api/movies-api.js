export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=de814b73aa23af858b8507c7bda54c0f&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };