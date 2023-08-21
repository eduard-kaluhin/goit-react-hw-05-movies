import PropTypes from 'prop-types';
import { MoviItem } from 'components/ MoviItem/ MoviItem';
import { Ul } from './MoviesList.styled';
export const MoviesList = ({ movies = [] }) => {
  const isVisible = Array.isArray(movies) && movies?.length > 0;

  return (
    <>
      <Ul>
        {isVisible &&
          movies.map(movie => <MoviItem key={movie.id} {...movie} />)}
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
