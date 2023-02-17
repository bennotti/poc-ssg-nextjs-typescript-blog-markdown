import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@pages/index';

describe('Home', () => {
  // beforeAll(() => server.listen());
  // afterEach(() => server.resetHandlers());
  // afterAll(() => server.close());
  jest.useFakeTimers();

  test('renders a heading', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const { getByTestId, findByTestId, asFragment } = render(
      <Home />
    );

    const h1Element = await findByTestId('heading1');

    expect(h1Element).toBeInTheDocument();
    // const button = screen.getByTestId('submit');

    // fireEvent.change(inputElementEmail, {
    //   target: { value: 'dev@.com.br' },
    // });
    // fireEvent.click(button);

    // expect(h1Element.value).toBe('dev@.com.br');

    // await waitForElementToBeRemoved(inputElementEmail);

    // expect(screen.getByTestId('input-codigo')).toBeInTheDocument();
  });

  // it('renders a heading', () => {
  //   render(<Home />)

  //   const heading = screen.getByRole('heading', {
  //     name: /welcome to next\.js!/i,
  //   })

  //   expect(heading).toBeInTheDocument()
  // })
  // it('renders a heading1', () => {
  //   render(<Home />)

  //   const heading = screen.getByRole('heading', {
  //     name: /welcome to next\.js!/i,
  //   })

  //   expect(heading).toBeInTheDocument()
  // })
})
