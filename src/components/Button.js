import PropTypes from 'prop-types';

const Button = ({
  value, clickHandler, color, wide,
}) => {
  const handleClick = () => clickHandler(value);

  const size = wide ? '1 1 50%' : '1 1 25%';

  const styles = {
    color: 'black',
    border: '1px solid black',
    backgroundColor: color,
    flex: size,
  };

  return (
    <>
      <button style={styles} type="button" onClick={handleClick}>{value}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};
