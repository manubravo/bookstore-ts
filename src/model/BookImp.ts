import { Constant } from "../security/Constant";
import { Book } from "./Book";

export class BookImp implements Book {
  private static counter: number = 200;
  private _id: number;
  private _title: string;
  private _description: string;
  private _borrowed?: boolean = false;
  private _type?: number;

  constructor( book: Book) {
    this._id = BookImp.counter++;
    this._title = book.title;
    this._description = book.description;
    this._borrowed = book.borrowed;
    this._type = book.type;
  }

  private set title(value: string) {
    if (value === undefined || value === null || value.trim() === '') {
      throw new Error('title of Book cannot be undefined or null');
    }
    this._title = value;
  }
  private set description(value: string) {
    if (value === undefined || value === null || value.trim() === '') {
      throw new Error('description of Book cannot be undefined or null');
    }
    this._description = value;
  }
  private set borrowed(value: boolean) {
    this._borrowed = value;
  }
  public borrow(): void {
    this.borrowed = true;
  }
  public returnBook(): void {
    this.borrowed = false;
  }
  private set type(value: number) {
    if (![Constant.NOVEL, Constant.STORY, Constant.POETRY].includes(value)) {
      throw new Error('Invalid bookType. Must be 1, 2 or 3.');
    }
    this._type = value;
  }

  get id(): number {
    return this._id;
  }
  get  title(): string {
    return this._title;
  }
  get description(): string {
    return this._description;
  }
  get borrowed(): boolean {
    return this._borrowed ?? false;
  }
  get type(): number {
    return this._type ?? Constant.POETRY;
  }

 toString(): string {
    return `${this.id}, ${this.title}, ${this.description}, ${this.borrowed}, ${this.type}`;
  }
}
