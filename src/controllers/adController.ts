import { QueryParams, } from '../types/QueryParams'
import { matchAd } from '../service/MatchService';
import { ads } from '../mock/ads';

const express = require('express')
const router = express.Router()


router.get('/', (req: any, res: any) => {
    return res.send(ads)
});


router.get('/best', (req: any, res: any) => {
    const { lat, long, tags, }: QueryParams  = req.query;
    try {
        const bestAd =  matchAd({ lat, long, tags, })
        return res.send({ success: true, message: '', ad: bestAd, })
         
    }catch(err) {
        return res.send({ success: false, message: err.toString(), ad: null })
    }
});

export default router