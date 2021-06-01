import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

it('renders the app correctly', () => {
  const app = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  ).toJSON();
  expect(app).toMatchSnapshot();
});
