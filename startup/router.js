const express = require('express');
const personRoutes = require('../src/routes/pessoas');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', personRoutes);
};
