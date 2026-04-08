const express = require('express');
const personRoutes = require('../src/routes/pessoas');
const gatitosRoutes = require('../src/routes/gatitos');


module.exports = (app) => {
    app.use(express.json());
    app.use('/api', personRoutes);
    app.use('/items', gatitosRoutes);
};
