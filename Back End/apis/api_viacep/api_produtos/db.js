import { Pool } from 'pg';

const BD = new Pool({
    // user: 'postgres',
    // host: 'localhost',
    // database: 'produtos_3b',
    // port: 5432,
    // password: 'admin'
    connectionString:"postgres://postgres.qoycfkppyaiamuwxygts:Ja3WO9eh937K0KaV@aws-1-us-east-1.pooler.supabase.com:6543/postgres",
    ssl:{
        rejectUnauthorized: false
    }
});
//const BD = new Pool({
// user:'postgres',
// host:'db.suutbdxnkjwuwfkracsb.supabase.co',
// database:'postgres',
// port:5432,
// password: 'bancodedadossenai'
//


//})


const testarConexao = async () => {
    try {
        const cliente = await BD.connect();
        console.log('Conexão realizada com sucesso✅!');
        cliente.release();

    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados', error.message)
    }
}

export { BD, testarConexao }