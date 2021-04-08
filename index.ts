import express  from 'express';

import mq  from './src/mq';
import addController from './src/controllers/adController';


const app: express.Application = express();


app.use('/ads', addController)


// mq.subscribe('create-ad', (newAd, ack, nack) => {
//   // TODO: COMPLETE LOGIC.  
//   ack();
// });


app.listen(3333, () => console.log('Listening...'));