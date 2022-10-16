import express, {Express, Request, Response} from 'express';

const app: Express = express();

const PORT: number = 8080 || process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello World!'});
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})