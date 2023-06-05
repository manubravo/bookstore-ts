import { Book } from "../model/Book";
import { BookImp } from "../model/BookImp";

export module BookCollections {
    export function compareTitleDesc(a: Book, b: Book): number {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
    }
    export function compareBooksById(a: BookImp, b: BookImp): number {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    }
}