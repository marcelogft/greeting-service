import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan'; 
import compression from 'compression'; 
import responseTime from 'response-time';
//ROUTES 
import health from './router/health';
import info from './router/info';
import metrics from './router/metrics'; 
import greeting from './router/greeting'; 
 
let app = express();
app.server = http.createServer(app);
// 3rd party middleware
app.use(cors());
app.use(responseTime());
//Middleware logger
app.use(morgan('dev'));
//compression// compress all requests
app.use(compression()); 
app.use(bodyParser.json());
//ROUTES
app.use(express.static(__dirname + '/public'));

//health 
app.use (health());
//info 
app.use (info()); 
app.use (metrics());
app.use('/api', greeting());
    
app.server.listen(process.env.PORT || 8080);
console.log(`Started on port ${app.server.address().port}`);


export default app;

