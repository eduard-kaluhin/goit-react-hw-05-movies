import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #966060;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
`;

export const MoviesItem = ({ title, name, id }) => {
  const location = useLocation();

  return (
    <li>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        {title ?? name}
      </StyledLink>
    </li>
  );
};

MoviesItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
};
