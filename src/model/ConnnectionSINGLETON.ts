import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';

dotenv.config();

export class ConnectionSINGLETON {
  private static _instance: ConnectionSINGLETON;
  private _connection: mysql.Connection;

  private constructor() {
    this._connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });
  }

  public static get instance(): ConnectionSINGLETON {
    if (!this._instance) {
      this._instance = new ConnectionSINGLETON();
    }
    return this._instance;
  }

  public getConnection(): mysql.Connection {
    return this._connection;
  }

  public close(): void {
    this._connection.end();
  }

  public query(sql: string, params: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this._connection.query(sql, params, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}