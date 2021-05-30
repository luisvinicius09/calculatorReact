import PropTypes from 'prop-types';
import Button from './Button';
import symbols from '../utils/symbols';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  const styles = {
    display: 'flex',
    height: '400px',
    flexWrap: 'wrap',
  };

  return (
    <>
      <div style={styles}>
        {symbols.map((s) => (
          <Button
            value={s.symbol}
            key={s.symbol}
            color={s.type === 'num' ? '#edf6f9' : '#fb8500'}
            wide={s.symbol === '0'}
            clickHandler={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
