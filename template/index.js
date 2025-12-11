import dotenv from 'dotenv';
import app from './lib/express.js';
import { initRouter } from './src/router.js';
import { connectDB } from './lib/mongoose.js';

dotenv.config();

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;
const DB_URL = process.env.MONGODB_CONN_STRING;

app.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});

initRouter(app);
connectDB(DB_URL);
