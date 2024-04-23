let categories = [
    { id: 1, name: 'Category A' },
    { id: 2, name: 'Category B' },
    { id: 3, name : 'Category C'}
  ];
  
  
  exports.getAllCategories = (req, res) => {
    res.json(categories);
  };
  
  
  exports.getCategoryById = (req, res) => {
    const id = parseInt(req.params.id);
    const category = categories.find(category => category.id === id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  };
  
  
  exports.createCategory = (req, res) => {
    const { name } = req.body;
    const id = categories.length + 1;
    const newCategory = { id, name };
    categories.push(newCategory);
    res.status(201).json(newCategory);
  };
  
  
  exports.updateCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const index = categories.findIndex(category => category.id === id);
    if (index !== -1) {
      categories[index] = { ...categories[index], name };
      res.json(categories[index]);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  };
  
  
  exports.deleteCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const index = categories.findIndex(category => category.id === id);
    if (index !== -1) {
      categories.splice(index, 1);
      res.json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  };
  