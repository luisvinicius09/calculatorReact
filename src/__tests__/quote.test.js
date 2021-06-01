import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';

it('renders the quote correctly', () => {
  const quote = renderer.create(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  ).toJSON();
  expect(quote).toMatchSnapshot();
});
