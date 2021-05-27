import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <>
      <div>
        <Button value="A/C" clickHandler={handleClick} />
        <Button value="+/-" clickHandler={handleClick} />
        <Button value="%" clickHandler={handleClick} />
        <Button value="÷" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="1" clickHandler={handleClick} />
        <Button value="2" clickHandler={handleClick} />
        <Button value="3" clickHandler={handleClick} />
        <Button value="x" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="4" clickHandler={handleClick} />
        <Button value="5" clickHandler={handleClick} />
        <Button value="6" clickHandler={handleClick} />
        <Button value="+" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="7" clickHandler={handleClick} />
        <Button value="8" clickHandler={handleClick} />
        <Button value="9" clickHandler={handleClick} />
        <Button value="-" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="0" clickHandler={handleClick} />
        <Button value="." clickHandler={handleClick} />
        <Button value="=" clickHandler={handleClick} />
      </div>
    </>
  );
};

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
