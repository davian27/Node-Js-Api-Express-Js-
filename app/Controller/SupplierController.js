let suppliers = [
    { id: 1, name: 'Supplier A', address: 'Address A' },
    { id: 2, name: 'Supplier B', address: 'Address B' }
  ];
  
  
  exports.getAllSuppliers = (req, res) => {
    res.json(suppliers);
  };
  
 
  exports.createSupplier = (req, res) => {
    const { name, address } = req.body;
    const id = suppliers.length + 1;
    const newSupplier = { id, name, address };
    suppliers.push(newSupplier);
    res.status(201).json(newSupplier);
  };
  
  
  exports.updateSupplier = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, address } = req.body;
    const index = suppliers.findIndex(supplier => supplier.id === id);
    if (index !== -1) {
      suppliers[index] = { ...suppliers[index], name, address };
      res.json(suppliers[index]);
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  };
  
  
  exports.deleteSupplier = (req, res) => {
    const id = parseInt(req.params.id);
    const index = suppliers.findIndex(supplier => supplier.id === id);
    if (index !== -1) {
      suppliers.splice(index, 1);
      res.json({ message: 'Supplier deleted successfully' });
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  };
  