// Import node module
import express from 'express';

export default () => {
    const router = express.Router();
    router.route('/greeting')
        .get((req, res) => {
            res.status(200).send({ greeting: 'hello world!' });
        });
    return router;
}