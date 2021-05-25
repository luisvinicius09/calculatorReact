import PropTypes from 'prop-types';

const Button = ({ value }) => (
  <>
    <span>{value}</span>
  </>
);

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
