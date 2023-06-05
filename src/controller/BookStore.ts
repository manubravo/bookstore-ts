import { RowDataPacket, OkPacket, ResultSetHeader, FieldPacket } from 'mysql2/promise';

import { BookImp } from "../model/BookImp";
import { Connect } from "../model/Connect"
import { Constant } from "../security/Constant";
import { Library } from "./Library";

export class BookStore {
  private _library: Library;

  constructor(
    private _c: Connect
  ) {
    this._c = _c;
    this._library = new Library();
  }

  public activeLibrary(): Library {
    if (this._library === null) {
      this._library = new Library();
    }
    return this._library;
  }

  public async insert(a: BookImp): Promise<void> {
    const c = await this._c.on;
    try {
      await c.execute(Constant.BOOK_ADD,
        [
          a.id,
          a.title,
          a.description,
          a.borrowed,
          a.type
        ]
      );
      console.log('You have added a book to the database.');
    } catch (err) {
      throw new Error(`Error adding a book: ${err}`);
    }
  }

  public async deleteBookOfDB(id: number): Promise<void> {
    try {
      const conn = await this._c.on;
      await conn.execute(Constant.BOOK_DELETE_BY_ID, [id]);
      console.log("You have deleted a book from the database.");
    } catch (e) {
      throw new Error(`Error deleting a book: ${e}`);
    }
  }

  public async getAllNotBorrowed(): Promise<any[]> {
    const con = await this._c.on;
    try {
      const [rows, _]: [RowDataPacket[], FieldPacket[]] = await con.query(Constant.BOOK_GET_NOT_BORROWED);
      //console.log(rows); // Debug
      const books: any[] = [];
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        books.push({
          id: row.ID,
          title: row.TITLE,
          description: row.DESCRIPTION,
          borrowed: row.BORROWED,
          type: row.TYPE
        });
      }
      //console.log(books); // Add this line to verify books is not undefined
      return books;
    } catch (err) {
      throw new Error(`Error querying books: ${err}`);
    }
  }

  public async getTotalBorrowed(): Promise<Number> {
    const con = await this._c.on;
    try {
      const [rows, _]: [RowDataPacket[], FieldPacket[]] = await con.query(Constant.BOOK_GET_BORROWED);
      return rows.length;
    } catch (err) {
      throw new Error(`Error querying books: ${err}`);
    }
  }
  /*public async injectionSerToDB(nameFile: string): Promise<void> {
    try {
      console.log("Injecting serialized file to the database...");
      const injection: Object[] = this._library.readBooks(nameFile);
  
      const books: Book[] = injection.map(
        (obj: Object) => {
        const book: Book = Object.assign(new Book(), obj);
        return book;
      });
  
      for (let oneBook of books) {
        await this.insert(oneBook);
      }
  
      console.log("You have injected the serialized file to the database.");
    } catch (error) {
      throw new Error(`Error injecting serialized file to the database: ${error}`);
    }
  }*/
  
  /*public async injectionSerToDB(nameFile: string): Promise<void> {
    try {
      console.log("Injecting serialized file to the database...");
      const injection: Book[] = this._library.readBooks(nameFile);
      injection.forEach(async (book: Book) => {
        //await this.insert(book);
        console.log(typeof (book));
      });
      /*for (let oneBook of injection) {
        console.log(oneBook);
        await this.insert(oneBook);
      }
      console.log("You have injected the serialized file to the database.");
    } catch (error) {
      throw new Error(`Error injecting serialized file to the database: ${error}`);
    }
  }*/
}