// Import node module
import express from 'express'; 
import path from 'path';
 

export default () => {
    const router = express.Router();
    let pkg = {};
    try {
        // a path we KNOW is totally bogus and not a module
        pkg = require('../../package.json');
    }
    catch (e) {
         pkg = {};
    }

    const info = {
        app: {
            version: pkg.version || "0.0.0",
            description: pkg.description || 'no description',
            name: pkg.name || 'no name'
        }
    }

    router.route('/info')
        .get((req, res) => {
            res.status(200).send(info);
        });
    return router;
}
