export class Constant {
    static readonly NOVEL: number = 1;
    static readonly STORY: number = 2;
    static readonly POETRY: number = 3;

    static readonly URL: string = 'http://localhost:3306';
    static readonly USER: string = 'root';
    static readonly PASSWORD: string = '';

    //static readonly DB_NAME: string = 'db_bookstore_ts';
    
    static readonly BOOK_TABLE: string = 'CREATE TABLE `BOOK` ( `ID` INT NOT NULL , `TITLE` VARCHAR(60) NOT NULL , `DESCRIPTION` VARCHAR(120) NOT NULL , `BORROWED` BOOLEAN NOT NULL , `TYPE` INT NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;';

    static readonly BOOK_ADD: string = "INSERT INTO `BOOK` (`ID`, `TITLE`, `DESCRIPTION`, `BORROWED`, `TYPE`) VALUES (?, ?, ?, ?, ?);";

    static readonly BOOK_GET_ALL: string = "SELECT * FROM `BOOK`";

    static readonly BOOK_GET_BY_ID: string = "SELECT * FROM `BOOK` WHERE ID = ?";

    static readonly BOOK_DELETE_BY_ID: string = "DELETE FROM `BOOK` WHERE ID = ?";

    static readonly BOOK_GET_NOT_BORROWED: string = 'SELECT * FROM `BOOK` WHERE BORROWED = 0';

    static readonly BOOK_GET_BORROWED: string = "SELECT * FROM `BOOK` WHERE BORROWED = 1";

}