import { Constant } from '../../src/security/Constant';

describe('Constant', () => {
    it('should define all necessary constants', () => {
      expect(Constant.NOVEL).toEqual(1);
      expect(Constant.STORY).toEqual(2);
      expect(Constant.POETRY).toEqual(3);
      expect(Constant.BOOK_TABLE).toBeDefined();
      expect(Constant.BOOK_ADD).toBeDefined();
      expect(Constant.BOOK_GET_ALL).toBeDefined();
      expect(Constant.BOOK_GET_BY_ID).toBeDefined();
      expect(Constant.BOOK_DELETE_BY_ID).toBeDefined();
      expect(Constant.BOOK_GET_NOT_BORROWED).toBeDefined();
      expect(Constant.BOOK_GET_BORROWED).toBeDefined();
    });
  });
  