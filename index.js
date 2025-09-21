const express = require('express');
        const app = express();
        const fs = require('fs')
        const port = process.env.PORT || 3000; // Use process.env.PORT for Railway

        app.get('./data', (req, res) => {
            fs.readFile('data.json', 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error reading data.');
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(data);
            });
        });

        app.listen(port, () => {
            console.log(`API listening on port ${port}`);
        });