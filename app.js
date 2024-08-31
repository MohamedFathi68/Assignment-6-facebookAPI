import express from 'express'
const app = express()
const port = process.env.PORT || 3000
import cors from "cors";
import indexRouter from './src/modules/index.router.js';
import sequelize from './src/database/dbConnection.js';

await sequelize.sync({ alter: true, force: false });

app.use(express.json())
app.use(cors())

app.use('/api',indexRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))