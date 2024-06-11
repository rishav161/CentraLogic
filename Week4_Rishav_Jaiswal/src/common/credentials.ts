import * as dotenv from 'dotenv';
dotenv.config();

const credentials = {
    postgres: {
        USERNAME: process.env.DB_USER || "",
        DATABASE: process.env.DB_NAME || "",
        HOST: process.env.DB_HOST || "",
        PASSWORD: process.env.DB_PASSWORD ? String(process.env.DB_PASSWORD) : "", 
        DBPORT: Number(process.env.DB_PORT) || 5432,
    }
}

export default credentials;
