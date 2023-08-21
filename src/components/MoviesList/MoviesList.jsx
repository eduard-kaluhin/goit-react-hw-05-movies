import PropTypes from 'prop-types';
import { MoviesItem } from 'components/ MoviesItem/ MoviesItem';
import { Ul } from './MoviesList.styled';
export const MoviesList = ({ movies = [] }) => {
  const isVisible = Array.isArray(movies) && movies?.length > 0;

  return (
    <>
      <Ul>
        {isVisible &&
          movies.map(movie => <MoviesItem key={movie.id} {...movie} />)}
      </Ul>
    </>
  );
};

MoviesList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};
