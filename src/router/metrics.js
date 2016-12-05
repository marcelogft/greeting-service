// Import node module
import express from 'express';

import os from 'os';

export default () => {
    const router = express.Router();
    let metrics = {
        platform: os.platform() || '',
        type: os.type() || '',
        cpus: os.cpus() || '',
        mem: {
            total: os.totalmem() || '',
            free: os.freemem() || '',
        },
        net: os.networkInterfaces() || '',
        uptime: process.uptime(),
        node: {
            version: process.version,
            versions: process.versions
        },
        env: process.env,
        config: process.config

    }

    router.route('/metrics')
        .get((req, res) => {
            metrics.uptime = process.uptime();        
            metrics.mem.usage = process.memoryUsage();        
            res.status(200).send(metrics);
        });
    return router;
}