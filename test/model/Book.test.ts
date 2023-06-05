import { Book } from '../../src/model/Book';

describe('Book class tests', () => {
    let book: Book;
    
    beforeEach(() => {
        book = new Book('The Lord of the Rings', 'Epic fantasy novel', Book.NOVEL);
    });

    test('should return the correct book title', () => {
        expect(book.titleBook).toEqual('The Lord of the Rings');
    });

    test('should return the correct book description', () => {
        expect(book.descriptionBook).toEqual('Epic fantasy novel');
    });

    test('should set the book type correctly', () => {
        book.bookType = Book.STORY;
        expect(book.bookTypeBook).toEqual(Book.STORY);
    });

    test('should throw an error when an invalid book type is set', () => {
        expect(() => {
            book.bookType = 4;
        }).toThrow();
    });

    test('should start as not borrowed', () => {
        expect(book.isBorrowed()).toBeFalsy();
    });

    test('should be able to borrow a book', () => {
        book.borrow();
        expect(book.isBorrowed()).toBeTruthy();
    });

    test('should be able to return a book', () => {
        book.borrow();
        book.returnBook();
        expect(book.isBorrowed()).toBeFalsy();
    });
});
