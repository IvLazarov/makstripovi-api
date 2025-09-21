const express = require('express');
        const app = express();
        const port = process.env.PORT || 3000; // Use process.env.PORT for Railway

        app.get('/comics', (req, res) => {
            res.send('./db.json');
        });

        app.listen(port, () => {
            console.log(`API listening on port ${port}`);
        });