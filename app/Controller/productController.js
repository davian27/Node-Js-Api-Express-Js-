const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'product.json');

function readProductsFromFile(callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, JSON.parse(data));
        }
    });
}

function writeProductsToFile(products, callback) {
    fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
        callback(err);
    });
}

exports.getAllProducts = (req, res) => {
    readProductsFromFile((err, products) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to load products' });
        }
        res.json(products);
    });
};

exports.getProductById = (req, res) => {
    readProductsFromFile((err, products) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to load products' });
        }
        const id = parseInt(req.params.id);
        const product = products.find(product => product.id === id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    });
};

exports.createProduct = (req, res) => {
    readProductsFromFile((err, products) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to load products' });
        }
        const { nama } = req.body;
        const newProduct = {  id: products.length + 1 ,nama: nama }; // Sesuaikan properti id dan nama
        products.push(newProduct);
        writeProductsToFile(products, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to save product' });
            }
            res.status(201).json(newProduct);
        });
    });
};

exports.updateProduct = (req, res) => {
    readProductsFromFile((err, products) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to load products' });
        }
        const id = parseInt(req.params.id);
        const { nama } = req.body;
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index].nama = nama; 
            writeProductsToFile(products, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Failed to update product' });
                }
                res.json(products[index]);
            });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    });
};

exports.deleteProduct = (req, res) => {
    readProductsFromFile((err, products) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to load products' });
        }
        const id = parseInt(req.params.id);
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            writeProductsToFile(products, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Failed to delete product' });
                }
                res.json({ message: 'Product deleted successfully' });
            });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    });
};
