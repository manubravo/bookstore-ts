import { BookStore } from './controller/BookStore';
import { BookImp } from './model/BookImp';
import { Connect } from './model/Connect';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
    try {
        const deploy = new Connect(
            process.env.DB_USER,
            process.env.DB_PASSWORD
        );
        deploy.on;
        const b = new BookStore(deploy);
        b.activeLibrary();
        //const books: Book[] = b.activeLibrary().readBooks('books.json');
        console.log('Injection:');
        /*console.log(books);
        for(let oneBook of books) {
            b.insert(oneBook);
            console.log(oneBook);
        }*/
        //await b.injectionSerToDB('books.json');
        deploy.off();
    } catch (error: any) {
        throw new Error(`Error: ${error.message} in main`);
    }
}
main();