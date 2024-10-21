import express from 'express';
import cors from "cors";

require('dotenv').config()

// Middlewares
import { connectToDatabase, errorHandling } from './middlewares/database';

// Routes
import productsRouter from './apps/products/controller';
import usersRouter from './apps/users/controller';
import ordersRouter from './apps/orders/controller';

const app = express();

// CORS
const corsOptions = {
    origin: ['http://localhost:5173', 'https://ecommerce-frontend-red-alpha.vercel.app'],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Add database to endpoints - middleware
app.use(connectToDatabase);
// Add error handling - middleware
// app.use(errorHandling);

// Parse JSON requests
app.use(express.json());

// Routes
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/orders", ordersRouter);

app.listen(process.env.PORT, () => console.log("Listening on port: ", process.env.PORT))