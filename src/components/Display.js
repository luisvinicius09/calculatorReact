import PropTypes from 'prop-types';

const Display = ({ result = 0 }) => (
  <div>
    <h1>{result}</h1>
  </div>
);

export default Display;

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
