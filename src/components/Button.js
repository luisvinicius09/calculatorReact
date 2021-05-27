import PropTypes from 'prop-types';

const Button = ({ value, clickHandler }) => {
  const handleClick = () => clickHandler(value);

  return (
    <>
      <button type="button" onClick={handleClick}>{value}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
