import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products/', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;

    const product = data.products.find(product => product._id == productId)
    console.log(product)
    return res.send(product);
});

app.get('/', (req, res) => {
    res.send("Server is ready.")
});

const port = process.env.port || '5000';
app.listen(5000, () => {
    console.log(`Serve at http://localhost:${port}`)
});