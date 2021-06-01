import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

it('renders the app correctly', () => {
  const app = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  ).toJSON();
  expect(app).toMatchSnapshot();
});

it('should render the number 1', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/1/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 2', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/2/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 3', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/3/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 4', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/4/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 5', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/5/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 6', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/6/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 7', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/7/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 8', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/8/);
  expect(btnName).toBeInTheDocument();
});

it('should render the number 9', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnName = getByText(/9/);
  expect(btnName).toBeInTheDocument();
});
