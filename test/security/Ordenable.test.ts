import { Ordenable } from '../../src/security/Ordenable';

describe('Ordenable', () => {
  it('Return number when getOrder is called', () => {
    const ordenable: Ordenable = {
      getOrder: () => 1,
    };
    expect(typeof ordenable.getOrder()).toBe('number');
  });
});
