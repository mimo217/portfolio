const express = require('express');
const router = express.Router();
const portfolioController = require('../../controllers/api/portfolio')

router.get('/', portfolioController.getHome)
router.get('/projects', portfolioController.getProjects)
router.get('/about', portfolioController.getAbout)
router.get('/contact', portfolioController.getContact)

module.exports = router