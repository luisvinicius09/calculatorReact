import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  const symbols = [
    'A/C', '+/-', '%', '÷',
    '1', '2', '3', 'x',
    '4', '5', '6', '+',
    '7', '8', '9', '-',
    '0', '.', '=',
  ];

  return (
    <>
      <div>
        {symbols.map((s) => <Button value={s} key={s} clickHandler={handleClick} />)}
      </div>
    </>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
