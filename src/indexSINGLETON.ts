import { ConnectionSINGLETON } from './model/ConnnectionSINGLETON';

async function main() {
    const connection = ConnectionSINGLETON.instance.getConnection();
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            ConnectionSINGLETON.instance.close();
            return;
        }
        console.log('Connected to database for SINGLETON.');
        ConnectionSINGLETON.instance.close();
    });
}
main();