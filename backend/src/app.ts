import express from 'express';
import routes from'./routes/routes';

const PORT_NUMBER = 3000;


const app: express.Application = express();

app.set('port', process.env.PORT || PORT_NUMBER);

app.use(routes);


export default app;
