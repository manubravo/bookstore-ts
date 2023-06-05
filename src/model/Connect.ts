import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import { Constant } from '../security/Constant';
dotenv.config();

export class Connect {
  
  private _connectionPromise: Promise<mysql.Connection>;

  constructor(
    private user: string | undefined,
    private password: string | undefined,
    private nameDB?: string | undefined
  ) {

    console.log('Connecting to database...');
    this._connectionPromise = mysql.createConnection({
      host: process.env.DB_HOST!,
      user: this.user,
      password: this.password,
      database: process.env.DB_NAME! || nameDB!,

    }).then((conn: mysql.Connection) => {
      console.log('Connected successfully!');
      /* Remember nameDB! is not same !nameDB.
      Check if createDB must be called */
      nameDB! ? this.createDB(nameDB!): null;
      /*
      // if (nameDB!) {
      //   this.createDB(nameDB!);
      // }*/
      return conn;

    }).catch((err: mysql.QueryError) => {
      throw new Error(`Error Connecting to database: ${err}`);
    });
  }

  get on(): Promise<mysql.Connection> {
    return this._connectionPromise;
  }
  public async off(): Promise<void> {
    if (this._connectionPromise != null) {
      const conn = await this._connectionPromise;
      console.log('Closing connection...');
      await conn.end();
      console.log('Closed connection.');
      return;
    }
  }
  public async eject(): Promise<void> {
    if (this._connectionPromise != null) {
      const conn = await this._connectionPromise;
      console.log('Ejecting connection...');
      conn.destroy();
      console.log('Ejected connection.');
      return;
    }
  }

  public async deleteDB(databaseName: string): Promise<void> {
    const c = await this.on;
    const query = `DROP DATABASE IF EXISTS ${databaseName};`;
    try {
      console.log(`Deleting database if exists ${databaseName}...`);
      await c.query(query);
      console.log(`Deleted database ${databaseName} successfully!`);
      return;
    } catch (e) {
      console.error(e);
    }
  }

  private async createEntities() {
    console.log('Creating entities...');
    try {
      const c = await this.on;
      await c.execute(Constant.BOOK_TABLE);
      console.log('Created entities successfully!');
      return;
    } catch (e) {
      console.error(e);
    }
  }

  public async createDB(nameBD: string): Promise<void> {
    const create = `CREATE DATABASE ${nameBD};`;
    const use = `USE ${nameBD};`;
    const c = await this.on;
    try {
      await this.deleteDB(nameBD);
      await c.query(create);
      await c.query(use);
      this.createEntities();
      console.log(`Created database: ${nameBD}`);
      return;
    } catch (e) {
      console.error(e);
    }
  }
}