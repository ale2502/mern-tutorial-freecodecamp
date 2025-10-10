import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// middleware
app.use(express.json()); // This middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// Ex. on how middlewares work
app.use((req, res, next) => {
  console.log(`Req method is ${req.method}, Req URL is ${req.url} and req body is ${JSON.stringify(req.body.title)}`);
  next();
});

app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log('Server started on PORT: ', PORT);
})
