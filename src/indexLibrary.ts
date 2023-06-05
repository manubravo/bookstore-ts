import { Library } from "./controller/Library";
import { BookImp } from "./model/BookImp";
import { Book } from "./model/Book";
import { Constant } from "./security/Constant";

function main() {
    const a: Book = {
        title: "El ingenioso hidalgo Don Quijote de la Mancha",
        description: "Una novela de Miguel de Cervantes"
    }
    const bookA = new BookImp(a);
    const bookB = new BookImp({
        title: "Cien años de soledad",
        description: "Una novela de Gabriel García Márquez",
        borrowed: true,
        type: Constant.STORY
    });
    const bookC = new BookImp({
        title: "One Piece",
        description: "Una historia de Eechiro Oda",
        type: Constant.STORY
    });

    bookC.borrow();
    
    console.log(bookA.toString());
    console.log(bookB.toString());
    console.log(bookC.toString());

    // Create a library object
    const b = new Library();
    b.addBook(bookA);
    b.addBook(bookB);
    b.addBook(bookC);

    const books: Book[] = Array.from([
        {
            title: "Cenicienta",
            description: "Una novela de Disney",
            type: Constant.NOVEL
        },
        {
            title: "El hombre que leña",
            description: "Una novela de Shakespeare",
            borrowed: true,
            type: Constant.NOVEL
        },
        {
            title: "Naruto",
            description: "Una historia de Naruto",
            borrowed: true,
            type: Constant.STORY
        }
    ]);
    for (let oneBook of books) {
        b.addBook(new BookImp(oneBook));
    };
    // Print the library
    console.log("Print the library");
    for (let oneBook of b.getAllBooks()) {
        console.log(oneBook.toString());
    }
    // Print the library with borrowed books
    console.log("--------------------------------------")
    console.log("Print the library with borrowed books");
    for (let oneBook of b.getAllBooksBorrowed()) {
        console.log(oneBook.toString());
    }
    b.bookId(199);
    b.status(204);
    b.status(240);
    b.saveBooks("books.json");
    b.saveBookTxt("books.txt");
    b.saveOneBook("books.json", new BookImp({
        title: "La Ciudad de las Bestias",
        description: "Una novela de Isabel Allende",
        type: Constant.NOVEL
    }));
}
main();