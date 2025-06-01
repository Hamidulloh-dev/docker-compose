import express from "express"
import { Pool } from "pg"
import 'dotenv/config'

const app = express()
const pool = new Pool({
    connectionString: process.env.DB_URL
})

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()')
        res.send(result.rows[0].now)
    } catch (error) {
        console.error(error);
        
        res.status(500).send('databasega ulanishda xatolik')
    }
})

app.listen(3000, () => console.log('server 3000-portda ishga tushdi'))