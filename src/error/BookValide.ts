export class BookValide extends Error {
  constructor(message?: string, e?: Error) {
    if (message && e) {
      super(`${message} - ${e}`);
    } else if (message) {
      super(message);
    } else if (e) {
      super();
    } else {
      super("the book contructor is not valid");
    }
  }
}
