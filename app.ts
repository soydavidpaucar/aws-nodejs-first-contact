import express, {Express, Request, Response} from 'express';

const app: Express = express();

const PORT: number = 3000 || process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello World!'});
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})