import { sql } from "./db.js";

sql`
    CREATE TABLE videos (
        title           TEXT,
        description     TEXT,
        duration        INTERGER
    );
`.then(() => {
    console.log('Tabela criada!')
});
