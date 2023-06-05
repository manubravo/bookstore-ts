import { Connect } from '../../src/model/Connect';

// Mock from mysql2/promise library
jest.mock('mysql2/promise', () => ({
  createConnection: jest.fn().mockResolvedValue(true),
}));

// Unit test for the constructor and the on and off methods of the Connection class
describe('Connection', () => {
  test('should create a new successful connection to the database', async () => {
    // Fakes datas
    const nameDB = 'fakeDB';
    const user = 'fakeUser';
    const password = 'fakePassword';

    // execute
    const connection = new Connect(user, password);
    
    connection.on.catch(error => console.log('Error opening'));
    
    connection.off().catch(error => console.log('Error closing'));
    
    connection.eject().catch(error => console.log('Error ejecting'));// Verify that the connection is closed
  });
});
