import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

it('renders the homepage correctly', () => {
  const home = renderer.create(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  ).toJSON();
  expect(home).toMatchSnapshot();
});
