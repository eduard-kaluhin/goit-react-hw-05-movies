import { useFetchMovies } from 'hooks/fetchApi';
import { responses } from 'services/api';
import { useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const { isLoading, data, error, fetchApi } = useFetchMovies();

  useEffect(() => {
    fetchApi(responses.fetchPopularMovies());
  }, [fetchApi]);
  const movies = data?.results;
  console.log(movies);
  const isVisible = Array.isArray(movies) && movies.length > 0;

  return (
    <>
      <h2 style={{ marginLeft: `50px` }}>Trending today</h2>
      {isVisible && !error && (
        <MoviesList movies={movies} isLoading={isLoading} />
      )}
    </>
  );
};

export default Home;
