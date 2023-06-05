import { BookValide } from '../../src/error/BookValide';

describe('BookValide', () => {
  it('constructs an error message with the given message and Error', () => {
    const message = 'Something went wrong';
    const error = new Error('An error occurred');
    const bookValide = new BookValide(message, error);
    expect(bookValide.message).toBe(`${message} - ${error}`);
  });

  it('constructs an error message with the given message', () => {
    const message = 'Something went wrong';
    const bookValide = new BookValide(message);
    expect(bookValide.message).toBe(message);
  });

  it('constructs an error message with an empty string when only an Error is given', () => {
    const error = new Error('An error occurred');
    const bookValide = new BookValide(undefined, error);
    expect(bookValide.message).toBe('');
  });

  it('constructs a default error message when no parameters are given', () => {
    const bookValide = new BookValide();
    expect(bookValide.message).toBe('the book contructor is not valid');
  });
});
