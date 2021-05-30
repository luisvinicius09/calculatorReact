import PropTypes from 'prop-types';
import Button from './Button';
import symbols from '../utils/symbols';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <>
      <div>
        {symbols.map((s) => <Button value={s.symbol} key={s.symbol} clickHandler={handleClick} />)}
      </div>
    </>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
