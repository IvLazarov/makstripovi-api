const express = require('express');
        const app = express();
        const port = process.env.PORT || 3000; // Use process.env.PORT for Railway

        app.get('/', (req, res) => {
            res.send('Hello from your API!');
        });

        app.listen(port, () => {
            console.log(`API listening on port ${port}`);
        });