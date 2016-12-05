// Import node module
import express from 'express';

export default () => {
    const router = express.Router();
    router.route('/health')
        .get((req, res) => {
            res.status(200).send({ status: 'up' });
        });
    return router;
}