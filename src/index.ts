import { BookStore } from './controller/BookStore';
import { Book } from './model/Book';
import { BookImp } from './model/BookImp';
import { Connect } from './model/Connect';
import dotenv from 'dotenv';
import { Constant } from './security/Constant';

dotenv.config();

async function main() {
    const deploy = new Connect(
        process.env.DB_USER,
        process.env.DB_PASSWORD
    );
    deploy.on;

    const store = new BookStore(deploy);

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

    // Active the library object
    store.activeLibrary().addBook(bookA);
    store.activeLibrary().addBook(bookB);
    store.activeLibrary().addBook(bookC);

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
        store.activeLibrary().addBook(new BookImp(oneBook));
    };
    // Print the library
    console.log("Insert the library");
    for (let oneBook of store.activeLibrary().getAllBooks()) {
        console.log(store.insert(oneBook));
    }

    // Neceseary setTimeout if you wanna create the database
    setTimeout(() => {
        deploy.off();
    }, 1000);
}
main();