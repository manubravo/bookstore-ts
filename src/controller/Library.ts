import { BookImp } from "../model/BookImp";
import { BookCollections } from "../security/BookCollections";
import * as fs from 'fs';

export class Library {
    private _name: String | null;
    private _location: String | null;
    private _bookList: BookImp[];

    constructor(name?: string, location?: string) {
        this._name = name ?? null;
        this._location = location ?? null;
        this._bookList = [];
    }

    public getAllBooks(): BookImp[] {
        return this._bookList;
    }
    public addBook(oneBook: BookImp): void {
        this._bookList.push(oneBook);
    }

    public orderByDescendently(): void {
        this._bookList.sort(BookCollections.compareTitleDesc);
    }

    public orderByAscendently(): void {
        this._bookList.sort(BookCollections.compareBooksById);
    }

    public bookId(id: number): void {
        let found: boolean = false;
        for (let iterate of this._bookList) {
            if (iterate.id === id) {
                found = true;
                console.log(`ID: ${id} --> Book found: ${iterate}`);
                break;
            }
        }
        if (!found) {
            console.log(`ID: ${id} --> Book don't found.`);
        }
    }

    public status(id: number): void {
        let found: boolean = false;
        for (let iterate of this._bookList) {
            if (iterate.id === id) {
                found = true;
                console.log(`ID: ${id} --> Book found: ${iterate}`);
                console.log(`Status: ${iterate.borrowed}`);
                break;
            }
        }
        if (!found) {
            console.log(`Dont exists book with ID: ${id}.`);
        }
    }
    public getAllBooksBorrowed(): BookImp[] {
        let listBorrowed: BookImp[] = [];
        for (let iteration of this._bookList) {
            if (iteration.borrowed === true) {
                listBorrowed.push(iteration);
            }
        }
        listBorrowed.sort(BookCollections.compareTitleDesc);
        return listBorrowed;
    }

    public saveBooks(nameFile: string): void {
        console.log("Creating serialized file...");
        try {
            const serializedBookList = JSON.stringify(this._bookList);
            fs.writeFileSync(nameFile, serializedBookList);
            console.log("You have created a serialized file!");
        } catch (err) {
            throw new Error(`File ${nameFile} not created`);
        }
    }

    public saveOneBook(nameFile: string, oneBook: BookImp): void {
        try {
            // Read the existing JSON file
            const existingData: Buffer = fs.readFileSync(nameFile);
            const dataString: string = existingData.toString();
            const data = JSON.parse(dataString);
            console.log(`Add object in file ${nameFile}...`);
            // Add new object to the end of the array
            data.push(oneBook);
            // Write the updated content back to the file
            const updatedData = JSON.stringify(data, null, 2);
            const oos = fs.createWriteStream(nameFile);
            oos.write(updatedData);
            console.log('Object added');
            oos.close();
        } catch (err) {
            throw new Error(`File ${nameFile} not found or not updated`);
        }
    }

    public readBooks(nameFile: string): BookImp[] {
        let listBook: BookImp[] = [];
        try {
            let existingData: Buffer = fs.readFileSync(nameFile);
            const dataString: string = existingData.toString();
            const data: BookImp[] = JSON.parse(dataString);
            listBook = data;
        } catch (e) {
            throw new Error(`File ${nameFile} not found`);
        }
        return listBook;
    }

    public saveBookTxt(nameFile: string): void {
        console.log('Creating txt file...');
        try {
            fs.writeFileSync(nameFile, '');
            for (let itera of this._bookList) {
                fs.appendFileSync(nameFile, `${itera}\n`);
            }
            console.log('You have created a txt file!');
        } catch (error) {
            throw new Error(`File ${nameFile} not created`);
        }
    }
}