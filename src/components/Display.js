import PropTypes from 'prop-types';

const Display = ({ result }) => {
  const styles = {
    display: 'flex',
    height: '100px',
    backgroundColor: 'grey',
    color: 'white',
    padding: '0 10px 0 10px',
    textAlign: 'right',
    flexDirection: 'column',
  };

  return (
    <div style={styles}>
      <h1>{result}</h1>
    </div>
  );
};

export default Display;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
